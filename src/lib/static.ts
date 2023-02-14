import fsPromises from 'fs/promises'
import path from 'path'

export const getDatabaseStaticProps = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  const objectDataSipColumn = JSON.parse(dataSipColumn.toString())

  const filePathIntegbio = path.join(
    process.cwd(),
    './data/integbio_database.json'
  )
  const dataIntegbio = await fsPromises.readFile(filePathIntegbio)
  const objectDataIntegbio = JSON.parse(dataIntegbio.toString())

  const filePathIntegbioColumn = path.join(
    process.cwd(),
    './data/integbio_database_column.json'
  )
  const dataIntegbioColumn = await fsPromises.readFile(filePathIntegbioColumn)
  const objectDataIntegbioColumn = JSON.parse(dataIntegbioColumn.toString())

  return {
    props: {
      sipDatabase: objectDataSip,
      integbioDatabase: objectDataIntegbio,
      sipDatabaseColumn: objectDataSipColumn,
      integbioDatabaseColumn: objectDataIntegbioColumn,
    },
  }
}

export const getSipDatabaseStaticProps = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  const objectDataSipColumn = JSON.parse(dataSipColumn.toString())

  return {
    props: {
      database: objectDataSip,
      columns: objectDataSipColumn[0],
    },
  }
}

export const getDataStaticProps = async (context: {
  params: { id: string }
}) => {
  const id = context.params.id

  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  const objectDataSipColumn = JSON.parse(dataSipColumn.toString())

  const currentData =
    objectDataSip.find((v: { sip_id: string }) => v.sip_id === id) || null

  return {
    props: {
      data: currentData,
      columns: objectDataSipColumn[0],
    },
  }
}

export const getDataStaticPaths = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())
  const pathsSip = objectDataSip.map(
    (item: { sip_id: string }) => `/data/${item.sip_id}`
  )

  return {
    paths: pathsSip,
    fallback: false,
  }
}
