import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Token: Prisma.Token
  File: Prisma.File
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image' | 'Tokens' | 'Files'
      ordering: 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'image'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
  },
  User: {
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    Files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | 'createdById'
    }
  }
  Token: {

  }
  File: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    token: 'Token'
    tokens: 'Token'
    file: 'File'
    files: 'File'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneToken: 'Token'
    updateOneToken: 'Token'
    updateManyToken: 'AffectedRowsOutput'
    deleteOneToken: 'Token'
    deleteManyToken: 'AffectedRowsOutput'
    upsertOneToken: 'Token'
    createOneFile: 'File'
    updateOneFile: 'File'
    updateManyFile: 'AffectedRowsOutput'
    deleteOneFile: 'File'
    deleteManyFile: 'AffectedRowsOutput'
    upsertOneFile: 'File'
  },
  User: {
    id: 'String'
    username: 'String'
    email: 'String'
    fullname: 'String'
    password: 'String'
    active: 'Boolean'
    sudo: 'Boolean'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    image: 'String'
    Tokens: 'Token'
    Files: 'File'
  }
  Token: {
    id: 'String'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    userId: 'String'
    User: 'User'
  }
  File: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    path: 'String'
    filename: 'String'
    name: 'String'
    mimetype: 'String'
    encoding: 'String'
    size: 'Float'
    rank: 'Int'
    createdById: 'String'
    CreatedBy: 'User'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  File: Typegen.NexusPrismaFields<'File'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  