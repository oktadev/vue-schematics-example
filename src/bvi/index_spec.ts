import { HostTree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import packageJson from './vue-pkg.json';

const collectionPath = path.join(__dirname, '../collection.json');

describe('bvi', () => {
  it('works', (done) => {
    const tree = new UnitTestTree(new HostTree);
    tree.create('/package.json', JSON.stringify(packageJson));

    const runner = new SchematicTestRunner('schematics', collectionPath);
    runner.runSchematicAsync('bvi', {}, tree).toPromise().then(tree => {
      expect(tree.files.length).toEqual(3);
      expect(tree.files.sort()).toEqual(['/package.json', '/src/App.vue', '/src/main.js']);

      const mainContent = tree.readContent('/src/main.js');
      expect(mainContent).toContain(`Vue.use(BootstrapVue)`);
      done();
    }, done.fail);
  });
});