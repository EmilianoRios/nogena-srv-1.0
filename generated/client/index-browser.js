
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.CareersScalarFieldEnum = {
  id: 'id',
  employeeId: 'employeeId'
};

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  content: 'content',
  postId: 'postId',
  authorId: 'authorId',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.CycleCareerScalarFieldEnum = {
  id: 'id',
  points: 'points',
  currentMonth: 'currentMonth',
  kilometers: 'kilometers',
  position: 'position',
  createAt: 'createAt',
  updateAt: 'updateAt',
  careersId: 'careersId'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  dni: 'dni',
  username: 'username',
  phone: 'phone',
  password: 'password',
  role: 'role',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.PostsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  authorId: 'authorId'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RunCareerScalarFieldEnum = {
  id: 'id',
  points: 'points',
  currentMonth: 'currentMonth',
  kilometers: 'kilometers',
  position: 'position',
  careerId: 'careerId',
  createAt: 'createAt',
  updateAt: 'updateAt',
  careersId: 'careersId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.WalkCareerScalarFieldEnum = {
  id: 'id',
  points: 'points',
  currentMonth: 'currentMonth',
  kilometers: 'kilometers',
  position: 'position',
  createAt: 'createAt',
  updateAt: 'updateAt',
  careersId: 'careersId'
};
exports.Role = {
  REGULAR: 'REGULAR',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  Employee: 'Employee',
  CycleCareer: 'CycleCareer',
  WalkCareer: 'WalkCareer',
  RunCareer: 'RunCareer',
  Careers: 'Careers',
  Posts: 'Posts',
  Comments: 'Comments'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
