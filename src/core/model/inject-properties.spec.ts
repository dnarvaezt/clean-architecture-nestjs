import { injectProperties } from './inject-properties'

describe('UbitsModel', () => {
  it('should inject properties from the init object', () => {
    class TestUbitsModel {
      public name: string
      public age: number

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    const model = new TestUbitsModel({ name: 'John Doe', age: 30 })

    expect(model.name).toBeUndefined()
    expect(model.age).toBeUndefined()
  })

  it('should inject properties from the init object', () => {
    class TestUbitsModel {
      public name: string = ''
      public age: number = 0

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    const model = new TestUbitsModel({ name: 'John Doe', age: 30 })

    expect(model.name).toEqual('John Doe')
    expect(model.age).toEqual(30)
  })

  it('should inject properties from the init object', () => {
    class TestUbitsModel {
      public name: string = 'name value'
      public age: number = 33

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    const model = new TestUbitsModel({ name: 'John Doe', age: 30 })

    expect(model.name).toEqual('John Doe')
    expect(model.age).toEqual(30)
  })

  it('should handle undefined init objects', () => {
    class TestUbitsModel {}

    const model = new TestUbitsModel()

    expect(model['name']).toBeUndefined()
    expect(model['age']).toBeUndefined()
  })

  function globalTest(classTest) {
    const TestUbitsModel1 = new classTest()
    expect(Object.keys(TestUbitsModel1).length).toBeTruthy()

    expect(new classTest({ prop: undefined }).prop).toEqual(undefined)
    expect(new classTest({ prop: NaN }).prop).toEqual(NaN)
    expect(new classTest({ prop: null }).prop).toEqual(null)
    expect(new classTest({ prop: true }).prop).toEqual(true)
    expect(new classTest({ prop: false }).prop).toEqual(false)
    expect(new classTest({ prop: '' }).prop).toBeFalsy()
    expect(new classTest({ prop: 'hello' }).prop).toEqual('hello')
    expect(new classTest({ prop: 0 }).prop).toEqual(0)
    expect(new classTest({ prop: 1 }).prop).toEqual(1)
    expect(new classTest({ prop: 1.5 }).prop).toEqual(1.5)
    expect(JSON.stringify(new classTest({ prop: {} }).prop)).toEqual(JSON.stringify({}))
    expect(JSON.stringify(new classTest({ prop: { a: '' } }).prop)).toEqual(
      JSON.stringify({ a: '' })
    )
  }

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = null

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = ''

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    const TestUbitsModel1 = new TestUbitsModel()
    expect(Object.keys(TestUbitsModel1).length).toBeFalsy()
    expect(TestUbitsModel1.prop).toBeFalsy()
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = 'Jest'

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = undefined

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = NaN

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = NaN

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = false

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop: any = true

      constructor(init: Partial<TestUbitsModel> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    globalTest(TestUbitsModel)
  })

  it('basic model with attributes', async () => {
    class TestUbitsModel {
      public prop1: any = true
      public prop2: any = true

      constructor(init: Partial<any> = {}) {
        injectProperties<TestUbitsModel>(this, init)
      }
    }

    const TestUbitsModel1 = new TestUbitsModel()
    expect(Object.keys(TestUbitsModel1).length).toEqual(2)

    const TestUbitsModel2 = new TestUbitsModel({ a: '', b: '', c: '' })
    expect(Object.keys(TestUbitsModel2).length).toEqual(2)
  })
})
