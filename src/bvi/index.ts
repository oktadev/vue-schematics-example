import { Rule, SchematicContext, Tree, apply, url, template, move, mergeWith, MergeStrategy } from '@angular-devkit/schematics';
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from 'schematics-utilities';
import { normalize } from 'path';

function addDependencies(host: Tree): Tree {
  const dependencies: NodeDependency[] = [
    { type: NodeDependencyType.Default, version: '4.6.0', name: 'bootstrap' },
    { type: NodeDependencyType.Default, version: '2.21.2', name: 'bootstrap-vue' }
  ];
  dependencies.forEach(dependency => addPackageJsonDependency(host, dependency));
  return host;
}

export function bvi(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    addDependencies(tree);

    const movePath = normalize('./src');
    const templateSource = apply(url('./templates/src'), [
      template({..._options}),
      move(movePath)
    ]);
    const rule = mergeWith(templateSource, MergeStrategy.Overwrite);
    return rule(tree, _context);
  };
}