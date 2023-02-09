import fsPromises from 'fs/promises'
import path from 'path'

export const getDatabaseStaticProps = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const filePathIntegbio = path.join(
    process.cwd(),
    './data/integbio_database.json'
  )
  const dataIntegbio = await fsPromises.readFile(filePathIntegbio)
  const objectDataIntegbio = JSON.parse(dataIntegbio.toString())

  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  const objectDataSipColumn = JSON.parse(dataSipColumn.toString())

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
