import EmberObject from '@ember/object';
import GenerateChartConfigMixin from 'resource-monitor/mixins/generate-chart-config';
import { module, test } from 'qunit';

module('Unit | Mixin | generate-chart-config', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let GenerateChartConfigObject = EmberObject.extend(GenerateChartConfigMixin);
    let subject = GenerateChartConfigObject.create();
    assert.ok(subject);
  });
});
