const { add, logger } = require('sample-mathlib');
const scopeMathlib = require('@prashantvermaiiitb/mathlib');

scopeMathlib.hello();

module.exports = {
    add, logger, scopeMathlib
}