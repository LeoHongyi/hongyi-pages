import test from 'ava'
import hongyiPages from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => hongyiPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(hongyiPages('w'), 'w@zce.me')
  t.is(hongyiPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
