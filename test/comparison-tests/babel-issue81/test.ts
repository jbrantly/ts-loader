import * as path from 'path'
import * as webpack from 'webpack'
import * as utils from '../utils'

test('build', async () => {
  const config = utils.webpackConfig(path.join(__dirname, 'src/a.ts'))
  config.devtool = 'source-map'
  config.module.rules = [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
          }
        },
        {
          loader: require.resolve(path.join(process.cwd(), 'dist')),
        },
      ]
    }
  ]
  const compiler = webpack(config)
  const memfs = utils.createMemfs()

  const stats = await utils.runSingleBuild(memfs, compiler)
  const bundle = await utils.readFile(memfs, '/bundle.js')
  const sourceMap = await utils.readFile(memfs, '/bundle.js.map')

  expect(utils.normalizeBundle(bundle)).toMatchSnapshot('bundle')
  expect(JSON.parse(utils.normalizeBundle(sourceMap))).toMatchSnapshot('source map')
  expect(utils.serializeStats(stats)).toMatchSnapshot('stats')
})

test('transpile only', async () => {
  const config = utils.webpackConfig(path.join(__dirname, 'src/a.ts'))
  config.devtool = 'source-map'
  config.module.rules = [
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
          }
        },
        {
          loader: require.resolve(path.join(process.cwd(), 'dist')),
          options: {
            transpileOnly: true,
          },
        },
      ]
    }
  ]
  const compiler = webpack(config)
  const memfs = utils.createMemfs()

  const stats = await utils.runSingleBuild(memfs, compiler)
  const bundle = await utils.readFile(memfs, '/bundle.js')
  const sourceMap = await utils.readFile(memfs, '/bundle.js.map')

  expect(utils.normalizeBundle(bundle)).toMatchSnapshot('bundle')
  expect(JSON.parse(utils.normalizeBundle(sourceMap))).toMatchSnapshot('source map')
  expect(utils.serializeStats(stats)).toMatchSnapshot('stats')
})
