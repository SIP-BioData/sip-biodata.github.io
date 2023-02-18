import fs from 'fs'
import fsPromises from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

export const getDatabaseStaticProps = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())
  const objectDataSipConcat = objectDataSip.map((item: any) => {
    return { type: 'sip', ...item }
  })

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
  const objectDataIntegbioConcat = objectDataIntegbio.map((item: any) => {
    return {
      type: 'integbio',
      integbio_group_name: 'Integbio Database Catalog',
      ...item,
    }
  })

  const filePathIntegbioColumn = path.join(
    process.cwd(),
    './data/integbio_database_column.json'
  )
  const dataIntegbioColumn = await fsPromises.readFile(filePathIntegbioColumn)
  const objectDataIntegbioColumn = JSON.parse(dataIntegbioColumn.toString())

  return {
    props: {
      sipDatabase: objectDataSipConcat,
      integbioDatabase: objectDataIntegbioConcat,
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

export const getSipGroupIndexStaticProps = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const groups = objectDataSip.map((item: any) => {
    return { groupId: item.sip_group_id, groupName: item.sip_group_name }
  })

  const groupList = Array.from(
    new Map(
      groups.map((item: { groupId: string; groupName: string }) => [
        item.groupId,
        item,
      ])
    ).values()
  )

  return {
    props: {
      groupList,
    },
  }
}

export const getSipGroupStaticProps = async (context: {
  params: { group_id: string }
}) => {
  const groupId = context.params.group_id
  const markdownDirectory = path.join(process.cwd(), 'src/markdown')

  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  const objectDataSip = JSON.parse(dataSip.toString())

  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  const objectDataSipColumn = JSON.parse(dataSipColumn.toString())

  const groupData = objectDataSip.filter(
    (v: { sip_group_id: string }) => v.sip_group_id === groupId
  )
  const groupName = groupData[0].sip_group_name

  const fileContent = fs.readFileSync(
    `${markdownDirectory}/group/${groupId}.mdx`,
    'utf-8'
  )
  const mdxSource = await serialize(fileContent)

  return {
    props: {
      groupData,
      groupName,
      source: mdxSource,
      columns: objectDataSipColumn[0],
    },
  }
}

export const getGroupStaticPaths = async () => {
  const markdownDirectory = path.join(process.cwd(), 'src/markdown')
  const files = fs.readdirSync(`${markdownDirectory}/group`)
  const paths = files.map((fileName) => ({
    params: {
      group_id: fileName.replace(/\.mdx$/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
