module.exports = {
  extends: [
    /** 官网提供的 css 标准 */
    'stylelint-config-standard',
    /** 通过按顺序分组来对相关属性声明进行排序 */
    'stylelint-config-rational-order',
    /** 作为Stylelint规则运行Prettier，并将差异报告为单个Stylelint问题 */
    'stylelint-prettier',
    /** 关闭所有不必要或可能与Prettier冲突的规则 */
    'stylelint-config-prettier',
  ],
  /** 此规则通过确保在单个规则中不使用被同一规则中的其他属性值排除的属性值来防止这种混淆 */
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  /** 屏蔽一些scss等语法检查 */
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'return'],
      },
    ],
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
}
