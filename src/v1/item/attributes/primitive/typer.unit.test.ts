import type { A } from 'ts-toolbelt'

import { ComputedDefault, Never, AtLeastOnce, OnlyOnce, Always } from '../constants'

import { string, number, boolean, binary } from './typer'
import {
  freezePrimitiveAttribute,
  InvalidEnumValueTypeError,
  InvalidDefaultValueTypeError,
  InvalidDefaultValueRangeError
} from './freeze'

describe('primitiveAttribute', () => {
  const path = 'some.path'

  describe('string', () => {
    it('returns default string', () => {
      const str = string()

      const assertStr: A.Contains<
        typeof str,
        {
          _type: 'string'
          _resolved?: string
          _required: Never
          _hidden: false
          _savedAs: undefined
          _key: false
          _default: undefined
        }
      > = 1
      assertStr

      expect(str).toMatchObject({
        _type: 'string',
        _required: 'never',
        _hidden: false,
        _savedAs: undefined,
        _key: false,
        _default: undefined
      })
    })

    it('returns required string (option)', () => {
      const strAtLeastOnce = string({ required: 'atLeastOnce' })
      const strOnlyOnce = string({ required: 'onlyOnce' })
      const strAlways = string({ required: 'always' })
      const strNever = string({ required: 'never' })

      const assertAtLeastOnce: A.Contains<typeof strAtLeastOnce, { _required: AtLeastOnce }> = 1
      assertAtLeastOnce
      const assertOnlyOnce: A.Contains<typeof strOnlyOnce, { _required: OnlyOnce }> = 1
      assertOnlyOnce
      const assertAlways: A.Contains<typeof strAlways, { _required: Always }> = 1
      assertAlways
      const assertNever: A.Contains<typeof strNever, { _required: Never }> = 1
      assertNever

      expect(strAtLeastOnce).toMatchObject({ _required: 'atLeastOnce' })
      expect(strOnlyOnce).toMatchObject({ _required: 'onlyOnce' })
      expect(strAlways).toMatchObject({ _required: 'always' })
      expect(strNever).toMatchObject({ _required: 'never' })
    })

    it('returns required string (method)', () => {
      const strAtLeastOnce = string().required()
      const strOnlyOnce = string().required('onlyOnce')
      const strAlways = string().required('always')
      const strNever = string().required('never')

      const assertAtLeastOnce: A.Contains<typeof strAtLeastOnce, { _required: AtLeastOnce }> = 1
      assertAtLeastOnce
      const assertOnlyOnce: A.Contains<typeof strOnlyOnce, { _required: OnlyOnce }> = 1
      assertOnlyOnce
      const assertAlways: A.Contains<typeof strAlways, { _required: Always }> = 1
      assertAlways
      const assertNever: A.Contains<typeof strNever, { _required: Never }> = 1
      assertNever

      expect(strAtLeastOnce).toMatchObject({ _required: 'atLeastOnce' })
      expect(strOnlyOnce).toMatchObject({ _required: 'onlyOnce' })
      expect(strAlways).toMatchObject({ _required: 'always' })
      expect(strNever).toMatchObject({ _required: 'never' })
    })

    it('returns hidden string (option)', () => {
      const str = string({ hidden: true })

      const assertStr: A.Contains<typeof str, { _hidden: true }> = 1
      assertStr

      expect(str).toMatchObject({ _hidden: true })
    })

    it('returns hidden string (method)', () => {
      const str = string().hidden()

      const assertStr: A.Contains<typeof str, { _hidden: true }> = 1
      assertStr

      expect(str).toMatchObject({ _hidden: true })
    })

    it('returns key string (option)', () => {
      const str = string({ key: true })

      const assertStr: A.Contains<typeof str, { _key: true }> = 1
      assertStr

      expect(str).toMatchObject({ _key: true })
    })

    it('returns key string (method)', () => {
      const str = string().key()

      const assertStr: A.Contains<typeof str, { _key: true }> = 1
      assertStr

      expect(str).toMatchObject({ _key: true })
    })

    it('returns savedAs string (option)', () => {
      const str = string({ savedAs: 'foo' })

      const assertStr: A.Contains<typeof str, { _savedAs: 'foo' }> = 1
      assertStr

      expect(str).toMatchObject({ _savedAs: 'foo' })
    })

    it('returns savedAs string (method)', () => {
      const str = string().savedAs('foo')

      const assertStr: A.Contains<typeof str, { _savedAs: 'foo' }> = 1
      assertStr

      expect(str).toMatchObject({ _savedAs: 'foo' })
    })

    it('returns string with enum values (method)', () => {
      string().enum(
        // @ts-expect-error
        42,
        'foo',
        'bar'
      )

      expect(() =>
        freezePrimitiveAttribute(
          string().enum(
            // @ts-expect-error
            42,
            'foo',
            'bar'
          ),
          path
        )
      ).toThrow(new InvalidEnumValueTypeError({ expectedType: 'string', enumValue: 42, path }))

      const str = string().enum('foo', 'bar')

      const assertStr: A.Contains<
        typeof str,
        { _resolved?: 'foo' | 'bar' | undefined; _enum: ['foo', 'bar'] }
      > = 1
      assertStr

      expect(str).toMatchObject({ _enum: ['foo', 'bar'] })
    })

    it('returns string with default value (option)', () => {
      string({
        // @ts-expect-error
        default: 42
      })

      expect(() =>
        freezePrimitiveAttribute(
          string({
            // @ts-expect-error
            default: 42
          }),
          path
        )
      ).toThrow(
        new InvalidDefaultValueTypeError({ expectedType: 'string', defaultValue: 42, path })
      )

      string({
        // @ts-expect-error Unable to throw here (it would require executing the fn)
        default: () => 42
      })

      const strA = string({ default: 'hello' })
      const sayHello = () => 'hello'
      const strB = string({ default: sayHello })

      const assertStrA: A.Contains<typeof strA, { _default: 'hello' }> = 1
      assertStrA

      expect(strA).toMatchObject({ _default: 'hello' })

      const assertStrB: A.Contains<typeof strB, { _default: () => string }> = 1
      assertStrB

      expect(strB).toMatchObject({ _default: sayHello })
    })

    it('returns string with default value (method)', () => {
      string().default(
        // @ts-expect-error
        42
      )

      expect(() =>
        freezePrimitiveAttribute(
          string().default(
            // @ts-expect-error
            42
          ),
          path
        )
      ).toThrow(
        new InvalidDefaultValueTypeError({ expectedType: 'string', defaultValue: 42, path })
      )

      string().default(
        // @ts-expect-error Unable to throw here (it would require executing the fn)
        () => 42
      )

      const strA = string().default('hello')
      const sayHello = () => 'hello'
      const strB = string().default(sayHello)

      const assertStrA: A.Contains<typeof strA, { _default: 'hello' }> = 1
      assertStrA

      expect(strA).toMatchObject({ _default: 'hello' })

      const assertStrB: A.Contains<typeof strB, { _default: () => string }> = 1
      assertStrB

      expect(strB).toMatchObject({ _default: sayHello })
    })

    it('default with enum values', () => {
      string().enum('foo', 'bar').default(
        // @ts-expect-error
        'baz'
      )

      expect(() =>
        freezePrimitiveAttribute(
          string().enum('foo', 'bar').default(
            // @ts-expect-error
            'baz'
          ),
          path
        )
      ).toThrow(
        new InvalidDefaultValueRangeError({ enumValues: ['foo', 'bar'], defaultValue: 'baz', path })
      )

      const strA = string().enum('foo', 'bar').default('foo')
      const sayFoo = (): 'foo' => 'foo'
      const strB = string().enum('foo', 'bar').default(sayFoo)

      const assertStrA: A.Contains<typeof strA, { _default: 'foo'; _enum: ['foo', 'bar'] }> = 1
      assertStrA

      expect(strA).toMatchObject({ _default: 'foo' })

      const assertStrB: A.Contains<
        typeof strB,
        { _default: () => 'foo'; _enum: ['foo', 'bar'] }
      > = 1
      assertStrB

      expect(strB).toMatchObject({ _default: sayFoo, _enum: ['foo', 'bar'] })
    })
  })

  describe('number', () => {
    it('returns default number', () => {
      const num = number()

      const assertNum: A.Contains<typeof num, { _type: 'number' }> = 1
      assertNum

      expect(num).toMatchObject({ _type: 'number' })
    })
  })

  describe('boolean', () => {
    it('returns default boolean', () => {
      const bool = boolean()

      const assertBool: A.Contains<typeof bool, { _type: 'boolean' }> = 1
      assertBool

      expect(bool).toMatchObject({ _type: 'boolean' })
    })
  })

  describe('binary', () => {
    it('returns default binary', () => {
      const bin = binary()

      const assertBin: A.Contains<typeof bin, { _type: 'binary' }> = 1
      assertBin

      expect(bin).toMatchObject({ _type: 'binary' })
    })
  })

  describe('ComputedDefault', () => {
    it('accepts ComputedDefault as default value (option)', () => {
      const str = string({ default: ComputedDefault })

      const assertStr: A.Contains<typeof str, { _default: ComputedDefault }> = 1
      assertStr

      expect(str).toMatchObject({ _default: ComputedDefault })
    })

    it('accepts ComputedDefault as default value (option)', () => {
      const str = string().default(ComputedDefault)

      const assertStr: A.Contains<typeof str, { _default: ComputedDefault }> = 1
      assertStr

      expect(str).toMatchObject({ _default: ComputedDefault })
    })
  })
})