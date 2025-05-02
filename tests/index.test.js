cat <<EOF > tests/index.test.js
const hello = require('../index');

test('returns Hello, World!', () => {
  expect(hello()).toBe('Hello, World!');
});
EOF
