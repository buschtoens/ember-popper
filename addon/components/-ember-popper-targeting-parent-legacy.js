import EmberPopper from './ember-popper';
import { argument } from '@ember-decorators/argument';
import { tagName } from 'ember-decorators/component';
import { type } from '@ember-decorators/argument/type';

@tagName('div')
export default class EmberPopperTargetingParent extends EmberPopper {
  @argument
  @type(undefined)
  popperTarget = undefined

  _getPopperTarget() {
    return this._initialParentNode;
  }
}
