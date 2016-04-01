import Ember from 'ember';

const avalanceZoneTypes = [
  'Side Country',
  'Backcountry',
  'Mult-Day'
];

export function rentalPropertyType([type]/*, hash*/) {
  if (avalanceZoneTypes.contains(type)) {
    return 'Avalanche';
  }

  return 'Inbounds';
}

export default Ember.Helper.helper(rentalPropertyType);
