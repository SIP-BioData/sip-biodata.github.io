import fs from 'fs'
import fsPromises from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

const getArrayHiddenGroup = async () => {
  const filePathHiddenGroup = path.join(process.cwd(), './data/hiddenGroup.txt')
  const dataHiddenGroup = await fsPromises.readFile(
    filePathHiddenGroup,
    'utf-8'
  )
  return dataHiddenGroup.split(/\r\n|\n/).filter((v) => v !== '')
}

const getDataSip = async () => {
  const filePathSip = path.join(process.cwd(), './data/sip_database.json')
  const dataSip = await fsPromises.readFile(filePathSip)
  return JSON.parse(dataSip.toString())
}

const getDataSipColumn = async () => {
  const filePathSipColumn = path.join(
    process.cwd(),
    './data/sip_database_column.json'
  )
  const dataSipColumn = await fsPromises.readFile(filePathSipColumn)
  return JSON.parse(dataSipColumn.toString())
}

export const getDatabaseStaticProps = async () => {
  const objectDataSip = await getDataSip()
  const objectDataSipConcat = objectDataSip.map((item: any) => {
    return {
      type: 'sip',
      sip_name: item.sip_name,
      sip_group_name: item.sip_group_name,
      ...item }
  })

  const objectDataSipColumn = await getDataSipColumn()
  const arrayHiddenGroup = await getArrayHiddenGroup()

  const filePathIntegbio = path.join(
    process.cwd(),
    './data/integbio_database.json'
  )
  const dataIntegbio = await fsPromises.readFile(filePathIntegbio)
  const objectDataIntegbio = JSON.parse(dataIntegbio.toString())
  const objectDataIntegbioConcat = objectDataIntegbio.map((item: any) => {
    return {
      type: 'integbio',
      integbio_name: item.integbio_name,
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
      hiddenGroups: arrayHiddenGroup,
    },
  }
}

export const getDataStaticProps = async (context: {
  params: { id: string }
}) => {
  const id = context.params.id

  const objectDataSip = await getDataSip()
  const objectDataSipConcat = objectDataSip.map((item: any) => {
    return {
      sip_name: item.sip_name,
      sip_group_name: item.sip_group_name,
      ...item }
  })
  const objectDataSipColumn = await getDataSipColumn()

  const currentData =
    objectDataSipConcat.find((v: { sip_id: string }) => v.sip_id === id) || null

  return {
    props: {
      data: currentData,
      columns: objectDataSipColumn[0],
    },
  }
}

export const getDataStaticPaths = async () => {
  const objectDataSip = await getDataSip()
  const pathsSip = objectDataSip.map(
    (item: { sip_id: string }) => `/data/${item.sip_id}`
  )

  return {
    paths: pathsSip,
    fallback: false,
  }
}

export const getSipGroupIndexStaticProps = async () => {
  const objectDataSip = await getDataSip()
  const arrayHiddenGroup = await getArrayHiddenGroup()

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

  const filteredGroupList = groupList.filter(
    (v: any) => !arrayHiddenGroup.includes(v.groupId)
  )

  return {
    props: {
      groupList: filteredGroupList,
    },
  }
}

export const getSipGroupStaticProps = async (context: {
  params: { group_id: string }
}) => {
  const groupId = context.params.group_id
  const markdownDirectory = path.join(process.cwd(), 'src/markdown')

  const objectDataSip = await getDataSip()
  const objectDataSipColumn = await getDataSipColumn()

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
  const objectDataSip = await getDataSip()
  const arrayHiddenGroup = await getArrayHiddenGroup()

  const groups = objectDataSip.map((item: any) => {
    return { groupId: item.sip_group_id }
  })

  const groupList = Array.from(
    new Map(
      groups.map((item: { groupId: string }) => [item.groupId, item])
    ).values()
  ) as { groupId: string }[]

  const filteredGroupList = groupList.filter(
    (v: { groupId: string }) => !arrayHiddenGroup.includes(v.groupId)
  )

  const paths = filteredGroupList.map((item) => ({
    params: {
      group_id: item.groupId,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
