
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = {
  id: string
  fullName: string
  dni: number
  username: string
  phone: string
  password: string
  role: Role
  createAt: Date
  updateAt: Date
}

/**
 * Model CycleCareer
 * 
 */
export type CycleCareer = {
  id: string
  points: number
  currentMonth: Date
  kilometers: number
  createAt: Date
  updateAt: Date
  careersId: string
}

/**
 * Model WalkCareer
 * 
 */
export type WalkCareer = {
  id: string
  points: number
  currentMonth: Date
  kilometers: number
  createAt: Date
  updateAt: Date
  careersId: string
}

/**
 * Model RunCareer
 * 
 */
export type RunCareer = {
  id: string
  points: number
  currentMonth: Date
  kilometers: number
  createAt: Date
  updateAt: Date
  careersId: string
}

/**
 * Model Careers
 * 
 */
export type Careers = {
  id: string
  employeeId: string
}

/**
 * Model Posts
 * 
 */
export type Posts = {
  id: string
  title: string
  content: string
  authorId: string
}

/**
 * Model Comments
 * 
 */
export type Comments = {
  id: string
  content: string
  postId: string
  authorId: string
  createAt: Date
  updateAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  REGULAR: 'REGULAR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<GlobalReject>;

  /**
   * `prisma.cycleCareer`: Exposes CRUD operations for the **CycleCareer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CycleCareers
    * const cycleCareers = await prisma.cycleCareer.findMany()
    * ```
    */
  get cycleCareer(): Prisma.CycleCareerDelegate<GlobalReject>;

  /**
   * `prisma.walkCareer`: Exposes CRUD operations for the **WalkCareer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalkCareers
    * const walkCareers = await prisma.walkCareer.findMany()
    * ```
    */
  get walkCareer(): Prisma.WalkCareerDelegate<GlobalReject>;

  /**
   * `prisma.runCareer`: Exposes CRUD operations for the **RunCareer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunCareers
    * const runCareers = await prisma.runCareer.findMany()
    * ```
    */
  get runCareer(): Prisma.RunCareerDelegate<GlobalReject>;

  /**
   * `prisma.careers`: Exposes CRUD operations for the **Careers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.careers.findMany()
    * ```
    */
  get careers(): Prisma.CareersDelegate<GlobalReject>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<GlobalReject>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employee: 'Employee',
    CycleCareer: 'CycleCareer',
    WalkCareer: 'WalkCareer',
    RunCareer: 'RunCareer',
    Careers: 'Careers',
    Posts: 'Posts',
    Comments: 'Comments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */


  export type EmployeeCountOutputType = {
    careers: number
    post: number
    comments: number
  }

  export type EmployeeCountOutputTypeSelect = {
    careers?: boolean
    post?: boolean
    comments?: boolean
  }

  export type EmployeeCountOutputTypeGetPayload<S extends boolean | null | undefined | EmployeeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EmployeeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EmployeeCountOutputTypeArgs)
    ? EmployeeCountOutputType 
    : S extends { select: any } & (EmployeeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EmployeeCountOutputType ? EmployeeCountOutputType[P] : never
  } 
      : EmployeeCountOutputType




  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect | null
  }



  /**
   * Count Type CareersCountOutputType
   */


  export type CareersCountOutputType = {
    cycleCareer: number
    walkCareer: number
    runCareer: number
  }

  export type CareersCountOutputTypeSelect = {
    cycleCareer?: boolean
    walkCareer?: boolean
    runCareer?: boolean
  }

  export type CareersCountOutputTypeGetPayload<S extends boolean | null | undefined | CareersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CareersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CareersCountOutputTypeArgs)
    ? CareersCountOutputType 
    : S extends { select: any } & (CareersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CareersCountOutputType ? CareersCountOutputType[P] : never
  } 
      : CareersCountOutputType




  // Custom InputTypes

  /**
   * CareersCountOutputType without action
   */
  export type CareersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CareersCountOutputType
     */
    select?: CareersCountOutputTypeSelect | null
  }



  /**
   * Count Type PostsCountOutputType
   */


  export type PostsCountOutputType = {
    comments: number
  }

  export type PostsCountOutputTypeSelect = {
    comments?: boolean
  }

  export type PostsCountOutputTypeGetPayload<S extends boolean | null | undefined | PostsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostsCountOutputTypeArgs)
    ? PostsCountOutputType 
    : S extends { select: any } & (PostsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostsCountOutputType ? PostsCountOutputType[P] : never
  } 
      : PostsCountOutputType




  // Custom InputTypes

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Employee
   */


  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    dni: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    dni: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    dni: number | null
    username: string | null
    phone: string | null
    password: string | null
    role: Role | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    dni: number | null
    username: string | null
    phone: string | null
    password: string | null
    role: Role | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    fullName: number
    dni: number
    username: number
    phone: number
    password: number
    role: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    dni?: true
  }

  export type EmployeeSumAggregateInputType = {
    dni?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    fullName?: true
    dni?: true
    username?: true
    phone?: true
    password?: true
    role?: true
    createAt?: true
    updateAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    fullName?: true
    dni?: true
    username?: true
    phone?: true
    password?: true
    role?: true
    createAt?: true
    updateAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    fullName?: true
    dni?: true
    username?: true
    phone?: true
    password?: true
    role?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs = {
    where?: EmployeeWhereInput
    orderBy?: Enumerable<EmployeeOrderByWithAggregationInput>
    by: EmployeeScalarFieldEnum[]
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }


  export type EmployeeGroupByOutputType = {
    id: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role: Role
    createAt: Date
    updateAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect = {
    id?: boolean
    fullName?: boolean
    dni?: boolean
    username?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    createAt?: boolean
    updateAt?: boolean
    careers?: boolean | Employee$careersArgs
    post?: boolean | Employee$postArgs
    comments?: boolean | Employee$commentsArgs
    _count?: boolean | EmployeeCountOutputTypeArgs
  }


  export type EmployeeInclude = {
    careers?: boolean | Employee$careersArgs
    post?: boolean | Employee$postArgs
    comments?: boolean | Employee$commentsArgs
    _count?: boolean | EmployeeCountOutputTypeArgs
  }

  export type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Employee :
    S extends undefined ? never :
    S extends { include: any } & (EmployeeArgs | EmployeeFindManyArgs)
    ? Employee  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'careers' ? Array < CareersGetPayload<S['include'][P]>>  :
        P extends 'post' ? Array < PostsGetPayload<S['include'][P]>>  :
        P extends 'comments' ? Array < CommentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? EmployeeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EmployeeArgs | EmployeeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'careers' ? Array < CareersGetPayload<S['select'][P]>>  :
        P extends 'post' ? Array < PostsGetPayload<S['select'][P]>>  :
        P extends 'comments' ? Array < CommentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? EmployeeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Employee ? Employee[P] : never
  } 
      : Employee


  type EmployeeCountArgs = 
    Omit<EmployeeFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Employee'> extends True ? Prisma__EmployeeClient<EmployeeGetPayload<T>> : Prisma__EmployeeClient<EmployeeGetPayload<T> | null, null>

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EmployeeFindUniqueOrThrowArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Employee'> extends True ? Prisma__EmployeeClient<EmployeeGetPayload<T>> : Prisma__EmployeeClient<EmployeeGetPayload<T> | null, null>

    /**
     * Find the first Employee that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs>(
      args?: SelectSubset<T, EmployeeFindManyArgs>
    ): Prisma.PrismaPromise<Array<EmployeeGetPayload<T>>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs>(
      args: SelectSubset<T, EmployeeCreateArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs>(
      args?: SelectSubset<T, EmployeeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs>(
      args: SelectSubset<T, EmployeeDeleteArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs>(
      args: SelectSubset<T, EmployeeUpdateArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs>(
      args: SelectSubset<T, EmployeeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs>(
      args: SelectSubset<T, EmployeeUpsertArgs>
    ): Prisma__EmployeeClient<EmployeeGetPayload<T>>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    careers<T extends Employee$careersArgs= {}>(args?: Subset<T, Employee$careersArgs>): Prisma.PrismaPromise<Array<CareersGetPayload<T>>| Null>;

    post<T extends Employee$postArgs= {}>(args?: Subset<T, Employee$postArgs>): Prisma.PrismaPromise<Array<PostsGetPayload<T>>| Null>;

    comments<T extends Employee$commentsArgs= {}>(args?: Subset<T, Employee$commentsArgs>): Prisma.PrismaPromise<Array<CommentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Employee base type for findUnique actions
   */
  export type EmployeeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUnique
   */
  export interface EmployeeFindUniqueArgs extends EmployeeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee base type for findFirst actions
   */
  export type EmployeeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }

  /**
   * Employee findFirst
   */
  export interface EmployeeFindFirstArgs extends EmployeeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs = {
    /**
     * The data used to create many Employees.
     */
    data: Enumerable<EmployeeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee.careers
   */
  export type Employee$careersArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    where?: CareersWhereInput
    orderBy?: Enumerable<CareersOrderByWithRelationInput>
    cursor?: CareersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CareersScalarFieldEnum>
  }


  /**
   * Employee.post
   */
  export type Employee$postArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    where?: PostsWhereInput
    orderBy?: Enumerable<PostsOrderByWithRelationInput>
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * Employee.comments
   */
  export type Employee$commentsArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    where?: CommentsWhereInput
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * Employee without action
   */
  export type EmployeeArgs = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude | null
  }



  /**
   * Model CycleCareer
   */


  export type AggregateCycleCareer = {
    _count: CycleCareerCountAggregateOutputType | null
    _avg: CycleCareerAvgAggregateOutputType | null
    _sum: CycleCareerSumAggregateOutputType | null
    _min: CycleCareerMinAggregateOutputType | null
    _max: CycleCareerMaxAggregateOutputType | null
  }

  export type CycleCareerAvgAggregateOutputType = {
    points: number | null
    kilometers: number | null
  }

  export type CycleCareerSumAggregateOutputType = {
    points: number | null
    kilometers: number | null
  }

  export type CycleCareerMinAggregateOutputType = {
    id: string | null
    points: number | null
    currentMonth: Date | null
    kilometers: number | null
    createAt: Date | null
    updateAt: Date | null
    careersId: string | null
  }

  export type CycleCareerMaxAggregateOutputType = {
    id: string | null
    points: number | null
    currentMonth: Date | null
    kilometers: number | null
    createAt: Date | null
    updateAt: Date | null
    careersId: string | null
  }

  export type CycleCareerCountAggregateOutputType = {
    id: number
    points: number
    currentMonth: number
    kilometers: number
    createAt: number
    updateAt: number
    careersId: number
    _all: number
  }


  export type CycleCareerAvgAggregateInputType = {
    points?: true
    kilometers?: true
  }

  export type CycleCareerSumAggregateInputType = {
    points?: true
    kilometers?: true
  }

  export type CycleCareerMinAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
  }

  export type CycleCareerMaxAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
  }

  export type CycleCareerCountAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
    _all?: true
  }

  export type CycleCareerAggregateArgs = {
    /**
     * Filter which CycleCareer to aggregate.
     */
    where?: CycleCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleCareers to fetch.
     */
    orderBy?: Enumerable<CycleCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CycleCareers
    **/
    _count?: true | CycleCareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CycleCareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CycleCareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleCareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleCareerMaxAggregateInputType
  }

  export type GetCycleCareerAggregateType<T extends CycleCareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCycleCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycleCareer[P]>
      : GetScalarType<T[P], AggregateCycleCareer[P]>
  }




  export type CycleCareerGroupByArgs = {
    where?: CycleCareerWhereInput
    orderBy?: Enumerable<CycleCareerOrderByWithAggregationInput>
    by: CycleCareerScalarFieldEnum[]
    having?: CycleCareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleCareerCountAggregateInputType | true
    _avg?: CycleCareerAvgAggregateInputType
    _sum?: CycleCareerSumAggregateInputType
    _min?: CycleCareerMinAggregateInputType
    _max?: CycleCareerMaxAggregateInputType
  }


  export type CycleCareerGroupByOutputType = {
    id: string
    points: number
    currentMonth: Date
    kilometers: number
    createAt: Date
    updateAt: Date
    careersId: string
    _count: CycleCareerCountAggregateOutputType | null
    _avg: CycleCareerAvgAggregateOutputType | null
    _sum: CycleCareerSumAggregateOutputType | null
    _min: CycleCareerMinAggregateOutputType | null
    _max: CycleCareerMaxAggregateOutputType | null
  }

  type GetCycleCareerGroupByPayload<T extends CycleCareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CycleCareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleCareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleCareerGroupByOutputType[P]>
            : GetScalarType<T[P], CycleCareerGroupByOutputType[P]>
        }
      >
    >


  export type CycleCareerSelect = {
    id?: boolean
    points?: boolean
    currentMonth?: boolean
    kilometers?: boolean
    createAt?: boolean
    updateAt?: boolean
    careersId?: boolean
    career?: boolean | CareersArgs
  }


  export type CycleCareerInclude = {
    career?: boolean | CareersArgs
  }

  export type CycleCareerGetPayload<S extends boolean | null | undefined | CycleCareerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CycleCareer :
    S extends undefined ? never :
    S extends { include: any } & (CycleCareerArgs | CycleCareerFindManyArgs)
    ? CycleCareer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'career' ? CareersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CycleCareerArgs | CycleCareerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'career' ? CareersGetPayload<S['select'][P]> :  P extends keyof CycleCareer ? CycleCareer[P] : never
  } 
      : CycleCareer


  type CycleCareerCountArgs = 
    Omit<CycleCareerFindManyArgs, 'select' | 'include'> & {
      select?: CycleCareerCountAggregateInputType | true
    }

  export interface CycleCareerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CycleCareer that matches the filter.
     * @param {CycleCareerFindUniqueArgs} args - Arguments to find a CycleCareer
     * @example
     * // Get one CycleCareer
     * const cycleCareer = await prisma.cycleCareer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CycleCareerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CycleCareerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CycleCareer'> extends True ? Prisma__CycleCareerClient<CycleCareerGetPayload<T>> : Prisma__CycleCareerClient<CycleCareerGetPayload<T> | null, null>

    /**
     * Find one CycleCareer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CycleCareerFindUniqueOrThrowArgs} args - Arguments to find a CycleCareer
     * @example
     * // Get one CycleCareer
     * const cycleCareer = await prisma.cycleCareer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CycleCareerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CycleCareerFindUniqueOrThrowArgs>
    ): Prisma__CycleCareerClient<CycleCareerGetPayload<T>>

    /**
     * Find the first CycleCareer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerFindFirstArgs} args - Arguments to find a CycleCareer
     * @example
     * // Get one CycleCareer
     * const cycleCareer = await prisma.cycleCareer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CycleCareerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CycleCareerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CycleCareer'> extends True ? Prisma__CycleCareerClient<CycleCareerGetPayload<T>> : Prisma__CycleCareerClient<CycleCareerGetPayload<T> | null, null>

    /**
     * Find the first CycleCareer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerFindFirstOrThrowArgs} args - Arguments to find a CycleCareer
     * @example
     * // Get one CycleCareer
     * const cycleCareer = await prisma.cycleCareer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CycleCareerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CycleCareerFindFirstOrThrowArgs>
    ): Prisma__CycleCareerClient<CycleCareerGetPayload<T>>

    /**
     * Find zero or more CycleCareers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CycleCareers
     * const cycleCareers = await prisma.cycleCareer.findMany()
     * 
     * // Get first 10 CycleCareers
     * const cycleCareers = await prisma.cycleCareer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleCareerWithIdOnly = await prisma.cycleCareer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CycleCareerFindManyArgs>(
      args?: SelectSubset<T, CycleCareerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CycleCareerGetPayload<T>>>

    /**
     * Create a CycleCareer.
     * @param {CycleCareerCreateArgs} args - Arguments to create a CycleCareer.
     * @example
     * // Create one CycleCareer
     * const CycleCareer = await prisma.cycleCareer.create({
     *   data: {
     *     // ... data to create a CycleCareer
     *   }
     * })
     * 
    **/
    create<T extends CycleCareerCreateArgs>(
      args: SelectSubset<T, CycleCareerCreateArgs>
    ): Prisma__CycleCareerClient<CycleCareerGetPayload<T>>

    /**
     * Create many CycleCareers.
     *     @param {CycleCareerCreateManyArgs} args - Arguments to create many CycleCareers.
     *     @example
     *     // Create many CycleCareers
     *     const cycleCareer = await prisma.cycleCareer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CycleCareerCreateManyArgs>(
      args?: SelectSubset<T, CycleCareerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CycleCareer.
     * @param {CycleCareerDeleteArgs} args - Arguments to delete one CycleCareer.
     * @example
     * // Delete one CycleCareer
     * const CycleCareer = await prisma.cycleCareer.delete({
     *   where: {
     *     // ... filter to delete one CycleCareer
     *   }
     * })
     * 
    **/
    delete<T extends CycleCareerDeleteArgs>(
      args: SelectSubset<T, CycleCareerDeleteArgs>
    ): Prisma__CycleCareerClient<CycleCareerGetPayload<T>>

    /**
     * Update one CycleCareer.
     * @param {CycleCareerUpdateArgs} args - Arguments to update one CycleCareer.
     * @example
     * // Update one CycleCareer
     * const cycleCareer = await prisma.cycleCareer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CycleCareerUpdateArgs>(
      args: SelectSubset<T, CycleCareerUpdateArgs>
    ): Prisma__CycleCareerClient<CycleCareerGetPayload<T>>

    /**
     * Delete zero or more CycleCareers.
     * @param {CycleCareerDeleteManyArgs} args - Arguments to filter CycleCareers to delete.
     * @example
     * // Delete a few CycleCareers
     * const { count } = await prisma.cycleCareer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CycleCareerDeleteManyArgs>(
      args?: SelectSubset<T, CycleCareerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CycleCareers
     * const cycleCareer = await prisma.cycleCareer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CycleCareerUpdateManyArgs>(
      args: SelectSubset<T, CycleCareerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CycleCareer.
     * @param {CycleCareerUpsertArgs} args - Arguments to update or create a CycleCareer.
     * @example
     * // Update or create a CycleCareer
     * const cycleCareer = await prisma.cycleCareer.upsert({
     *   create: {
     *     // ... data to create a CycleCareer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CycleCareer we want to update
     *   }
     * })
    **/
    upsert<T extends CycleCareerUpsertArgs>(
      args: SelectSubset<T, CycleCareerUpsertArgs>
    ): Prisma__CycleCareerClient<CycleCareerGetPayload<T>>

    /**
     * Count the number of CycleCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerCountArgs} args - Arguments to filter CycleCareers to count.
     * @example
     * // Count the number of CycleCareers
     * const count = await prisma.cycleCareer.count({
     *   where: {
     *     // ... the filter for the CycleCareers we want to count
     *   }
     * })
    **/
    count<T extends CycleCareerCountArgs>(
      args?: Subset<T, CycleCareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleCareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CycleCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CycleCareerAggregateArgs>(args: Subset<T, CycleCareerAggregateArgs>): Prisma.PrismaPromise<GetCycleCareerAggregateType<T>>

    /**
     * Group by CycleCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CycleCareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleCareerGroupByArgs['orderBy'] }
        : { orderBy?: CycleCareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CycleCareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CycleCareer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CycleCareerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    career<T extends CareersArgs= {}>(args?: Subset<T, CareersArgs>): Prisma__CareersClient<CareersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CycleCareer base type for findUnique actions
   */
  export type CycleCareerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * Filter, which CycleCareer to fetch.
     */
    where: CycleCareerWhereUniqueInput
  }

  /**
   * CycleCareer findUnique
   */
  export interface CycleCareerFindUniqueArgs extends CycleCareerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CycleCareer findUniqueOrThrow
   */
  export type CycleCareerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * Filter, which CycleCareer to fetch.
     */
    where: CycleCareerWhereUniqueInput
  }


  /**
   * CycleCareer base type for findFirst actions
   */
  export type CycleCareerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * Filter, which CycleCareer to fetch.
     */
    where?: CycleCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleCareers to fetch.
     */
    orderBy?: Enumerable<CycleCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleCareers.
     */
    cursor?: CycleCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleCareers.
     */
    distinct?: Enumerable<CycleCareerScalarFieldEnum>
  }

  /**
   * CycleCareer findFirst
   */
  export interface CycleCareerFindFirstArgs extends CycleCareerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CycleCareer findFirstOrThrow
   */
  export type CycleCareerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * Filter, which CycleCareer to fetch.
     */
    where?: CycleCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleCareers to fetch.
     */
    orderBy?: Enumerable<CycleCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleCareers.
     */
    cursor?: CycleCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleCareers.
     */
    distinct?: Enumerable<CycleCareerScalarFieldEnum>
  }


  /**
   * CycleCareer findMany
   */
  export type CycleCareerFindManyArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * Filter, which CycleCareers to fetch.
     */
    where?: CycleCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleCareers to fetch.
     */
    orderBy?: Enumerable<CycleCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CycleCareers.
     */
    cursor?: CycleCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleCareers.
     */
    skip?: number
    distinct?: Enumerable<CycleCareerScalarFieldEnum>
  }


  /**
   * CycleCareer create
   */
  export type CycleCareerCreateArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * The data needed to create a CycleCareer.
     */
    data: XOR<CycleCareerCreateInput, CycleCareerUncheckedCreateInput>
  }


  /**
   * CycleCareer createMany
   */
  export type CycleCareerCreateManyArgs = {
    /**
     * The data used to create many CycleCareers.
     */
    data: Enumerable<CycleCareerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CycleCareer update
   */
  export type CycleCareerUpdateArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * The data needed to update a CycleCareer.
     */
    data: XOR<CycleCareerUpdateInput, CycleCareerUncheckedUpdateInput>
    /**
     * Choose, which CycleCareer to update.
     */
    where: CycleCareerWhereUniqueInput
  }


  /**
   * CycleCareer updateMany
   */
  export type CycleCareerUpdateManyArgs = {
    /**
     * The data used to update CycleCareers.
     */
    data: XOR<CycleCareerUpdateManyMutationInput, CycleCareerUncheckedUpdateManyInput>
    /**
     * Filter which CycleCareers to update
     */
    where?: CycleCareerWhereInput
  }


  /**
   * CycleCareer upsert
   */
  export type CycleCareerUpsertArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * The filter to search for the CycleCareer to update in case it exists.
     */
    where: CycleCareerWhereUniqueInput
    /**
     * In case the CycleCareer found by the `where` argument doesn't exist, create a new CycleCareer with this data.
     */
    create: XOR<CycleCareerCreateInput, CycleCareerUncheckedCreateInput>
    /**
     * In case the CycleCareer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleCareerUpdateInput, CycleCareerUncheckedUpdateInput>
  }


  /**
   * CycleCareer delete
   */
  export type CycleCareerDeleteArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    /**
     * Filter which CycleCareer to delete.
     */
    where: CycleCareerWhereUniqueInput
  }


  /**
   * CycleCareer deleteMany
   */
  export type CycleCareerDeleteManyArgs = {
    /**
     * Filter which CycleCareers to delete
     */
    where?: CycleCareerWhereInput
  }


  /**
   * CycleCareer without action
   */
  export type CycleCareerArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
  }



  /**
   * Model WalkCareer
   */


  export type AggregateWalkCareer = {
    _count: WalkCareerCountAggregateOutputType | null
    _avg: WalkCareerAvgAggregateOutputType | null
    _sum: WalkCareerSumAggregateOutputType | null
    _min: WalkCareerMinAggregateOutputType | null
    _max: WalkCareerMaxAggregateOutputType | null
  }

  export type WalkCareerAvgAggregateOutputType = {
    points: number | null
    kilometers: number | null
  }

  export type WalkCareerSumAggregateOutputType = {
    points: number | null
    kilometers: number | null
  }

  export type WalkCareerMinAggregateOutputType = {
    id: string | null
    points: number | null
    currentMonth: Date | null
    kilometers: number | null
    createAt: Date | null
    updateAt: Date | null
    careersId: string | null
  }

  export type WalkCareerMaxAggregateOutputType = {
    id: string | null
    points: number | null
    currentMonth: Date | null
    kilometers: number | null
    createAt: Date | null
    updateAt: Date | null
    careersId: string | null
  }

  export type WalkCareerCountAggregateOutputType = {
    id: number
    points: number
    currentMonth: number
    kilometers: number
    createAt: number
    updateAt: number
    careersId: number
    _all: number
  }


  export type WalkCareerAvgAggregateInputType = {
    points?: true
    kilometers?: true
  }

  export type WalkCareerSumAggregateInputType = {
    points?: true
    kilometers?: true
  }

  export type WalkCareerMinAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
  }

  export type WalkCareerMaxAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
  }

  export type WalkCareerCountAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
    _all?: true
  }

  export type WalkCareerAggregateArgs = {
    /**
     * Filter which WalkCareer to aggregate.
     */
    where?: WalkCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkCareers to fetch.
     */
    orderBy?: Enumerable<WalkCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalkCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalkCareers
    **/
    _count?: true | WalkCareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalkCareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalkCareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalkCareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalkCareerMaxAggregateInputType
  }

  export type GetWalkCareerAggregateType<T extends WalkCareerAggregateArgs> = {
        [P in keyof T & keyof AggregateWalkCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalkCareer[P]>
      : GetScalarType<T[P], AggregateWalkCareer[P]>
  }




  export type WalkCareerGroupByArgs = {
    where?: WalkCareerWhereInput
    orderBy?: Enumerable<WalkCareerOrderByWithAggregationInput>
    by: WalkCareerScalarFieldEnum[]
    having?: WalkCareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalkCareerCountAggregateInputType | true
    _avg?: WalkCareerAvgAggregateInputType
    _sum?: WalkCareerSumAggregateInputType
    _min?: WalkCareerMinAggregateInputType
    _max?: WalkCareerMaxAggregateInputType
  }


  export type WalkCareerGroupByOutputType = {
    id: string
    points: number
    currentMonth: Date
    kilometers: number
    createAt: Date
    updateAt: Date
    careersId: string
    _count: WalkCareerCountAggregateOutputType | null
    _avg: WalkCareerAvgAggregateOutputType | null
    _sum: WalkCareerSumAggregateOutputType | null
    _min: WalkCareerMinAggregateOutputType | null
    _max: WalkCareerMaxAggregateOutputType | null
  }

  type GetWalkCareerGroupByPayload<T extends WalkCareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WalkCareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalkCareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalkCareerGroupByOutputType[P]>
            : GetScalarType<T[P], WalkCareerGroupByOutputType[P]>
        }
      >
    >


  export type WalkCareerSelect = {
    id?: boolean
    points?: boolean
    currentMonth?: boolean
    kilometers?: boolean
    createAt?: boolean
    updateAt?: boolean
    careersId?: boolean
    career?: boolean | CareersArgs
  }


  export type WalkCareerInclude = {
    career?: boolean | CareersArgs
  }

  export type WalkCareerGetPayload<S extends boolean | null | undefined | WalkCareerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WalkCareer :
    S extends undefined ? never :
    S extends { include: any } & (WalkCareerArgs | WalkCareerFindManyArgs)
    ? WalkCareer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'career' ? CareersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WalkCareerArgs | WalkCareerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'career' ? CareersGetPayload<S['select'][P]> :  P extends keyof WalkCareer ? WalkCareer[P] : never
  } 
      : WalkCareer


  type WalkCareerCountArgs = 
    Omit<WalkCareerFindManyArgs, 'select' | 'include'> & {
      select?: WalkCareerCountAggregateInputType | true
    }

  export interface WalkCareerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WalkCareer that matches the filter.
     * @param {WalkCareerFindUniqueArgs} args - Arguments to find a WalkCareer
     * @example
     * // Get one WalkCareer
     * const walkCareer = await prisma.walkCareer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WalkCareerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WalkCareerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WalkCareer'> extends True ? Prisma__WalkCareerClient<WalkCareerGetPayload<T>> : Prisma__WalkCareerClient<WalkCareerGetPayload<T> | null, null>

    /**
     * Find one WalkCareer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WalkCareerFindUniqueOrThrowArgs} args - Arguments to find a WalkCareer
     * @example
     * // Get one WalkCareer
     * const walkCareer = await prisma.walkCareer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WalkCareerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WalkCareerFindUniqueOrThrowArgs>
    ): Prisma__WalkCareerClient<WalkCareerGetPayload<T>>

    /**
     * Find the first WalkCareer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerFindFirstArgs} args - Arguments to find a WalkCareer
     * @example
     * // Get one WalkCareer
     * const walkCareer = await prisma.walkCareer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WalkCareerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WalkCareerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WalkCareer'> extends True ? Prisma__WalkCareerClient<WalkCareerGetPayload<T>> : Prisma__WalkCareerClient<WalkCareerGetPayload<T> | null, null>

    /**
     * Find the first WalkCareer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerFindFirstOrThrowArgs} args - Arguments to find a WalkCareer
     * @example
     * // Get one WalkCareer
     * const walkCareer = await prisma.walkCareer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WalkCareerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WalkCareerFindFirstOrThrowArgs>
    ): Prisma__WalkCareerClient<WalkCareerGetPayload<T>>

    /**
     * Find zero or more WalkCareers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalkCareers
     * const walkCareers = await prisma.walkCareer.findMany()
     * 
     * // Get first 10 WalkCareers
     * const walkCareers = await prisma.walkCareer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walkCareerWithIdOnly = await prisma.walkCareer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WalkCareerFindManyArgs>(
      args?: SelectSubset<T, WalkCareerFindManyArgs>
    ): Prisma.PrismaPromise<Array<WalkCareerGetPayload<T>>>

    /**
     * Create a WalkCareer.
     * @param {WalkCareerCreateArgs} args - Arguments to create a WalkCareer.
     * @example
     * // Create one WalkCareer
     * const WalkCareer = await prisma.walkCareer.create({
     *   data: {
     *     // ... data to create a WalkCareer
     *   }
     * })
     * 
    **/
    create<T extends WalkCareerCreateArgs>(
      args: SelectSubset<T, WalkCareerCreateArgs>
    ): Prisma__WalkCareerClient<WalkCareerGetPayload<T>>

    /**
     * Create many WalkCareers.
     *     @param {WalkCareerCreateManyArgs} args - Arguments to create many WalkCareers.
     *     @example
     *     // Create many WalkCareers
     *     const walkCareer = await prisma.walkCareer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WalkCareerCreateManyArgs>(
      args?: SelectSubset<T, WalkCareerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WalkCareer.
     * @param {WalkCareerDeleteArgs} args - Arguments to delete one WalkCareer.
     * @example
     * // Delete one WalkCareer
     * const WalkCareer = await prisma.walkCareer.delete({
     *   where: {
     *     // ... filter to delete one WalkCareer
     *   }
     * })
     * 
    **/
    delete<T extends WalkCareerDeleteArgs>(
      args: SelectSubset<T, WalkCareerDeleteArgs>
    ): Prisma__WalkCareerClient<WalkCareerGetPayload<T>>

    /**
     * Update one WalkCareer.
     * @param {WalkCareerUpdateArgs} args - Arguments to update one WalkCareer.
     * @example
     * // Update one WalkCareer
     * const walkCareer = await prisma.walkCareer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WalkCareerUpdateArgs>(
      args: SelectSubset<T, WalkCareerUpdateArgs>
    ): Prisma__WalkCareerClient<WalkCareerGetPayload<T>>

    /**
     * Delete zero or more WalkCareers.
     * @param {WalkCareerDeleteManyArgs} args - Arguments to filter WalkCareers to delete.
     * @example
     * // Delete a few WalkCareers
     * const { count } = await prisma.walkCareer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WalkCareerDeleteManyArgs>(
      args?: SelectSubset<T, WalkCareerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalkCareers
     * const walkCareer = await prisma.walkCareer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WalkCareerUpdateManyArgs>(
      args: SelectSubset<T, WalkCareerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalkCareer.
     * @param {WalkCareerUpsertArgs} args - Arguments to update or create a WalkCareer.
     * @example
     * // Update or create a WalkCareer
     * const walkCareer = await prisma.walkCareer.upsert({
     *   create: {
     *     // ... data to create a WalkCareer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalkCareer we want to update
     *   }
     * })
    **/
    upsert<T extends WalkCareerUpsertArgs>(
      args: SelectSubset<T, WalkCareerUpsertArgs>
    ): Prisma__WalkCareerClient<WalkCareerGetPayload<T>>

    /**
     * Count the number of WalkCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerCountArgs} args - Arguments to filter WalkCareers to count.
     * @example
     * // Count the number of WalkCareers
     * const count = await prisma.walkCareer.count({
     *   where: {
     *     // ... the filter for the WalkCareers we want to count
     *   }
     * })
    **/
    count<T extends WalkCareerCountArgs>(
      args?: Subset<T, WalkCareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalkCareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalkCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalkCareerAggregateArgs>(args: Subset<T, WalkCareerAggregateArgs>): Prisma.PrismaPromise<GetWalkCareerAggregateType<T>>

    /**
     * Group by WalkCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkCareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalkCareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalkCareerGroupByArgs['orderBy'] }
        : { orderBy?: WalkCareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalkCareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalkCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WalkCareer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WalkCareerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    career<T extends CareersArgs= {}>(args?: Subset<T, CareersArgs>): Prisma__CareersClient<CareersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WalkCareer base type for findUnique actions
   */
  export type WalkCareerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * Filter, which WalkCareer to fetch.
     */
    where: WalkCareerWhereUniqueInput
  }

  /**
   * WalkCareer findUnique
   */
  export interface WalkCareerFindUniqueArgs extends WalkCareerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WalkCareer findUniqueOrThrow
   */
  export type WalkCareerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * Filter, which WalkCareer to fetch.
     */
    where: WalkCareerWhereUniqueInput
  }


  /**
   * WalkCareer base type for findFirst actions
   */
  export type WalkCareerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * Filter, which WalkCareer to fetch.
     */
    where?: WalkCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkCareers to fetch.
     */
    orderBy?: Enumerable<WalkCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkCareers.
     */
    cursor?: WalkCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkCareers.
     */
    distinct?: Enumerable<WalkCareerScalarFieldEnum>
  }

  /**
   * WalkCareer findFirst
   */
  export interface WalkCareerFindFirstArgs extends WalkCareerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WalkCareer findFirstOrThrow
   */
  export type WalkCareerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * Filter, which WalkCareer to fetch.
     */
    where?: WalkCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkCareers to fetch.
     */
    orderBy?: Enumerable<WalkCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkCareers.
     */
    cursor?: WalkCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkCareers.
     */
    distinct?: Enumerable<WalkCareerScalarFieldEnum>
  }


  /**
   * WalkCareer findMany
   */
  export type WalkCareerFindManyArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * Filter, which WalkCareers to fetch.
     */
    where?: WalkCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkCareers to fetch.
     */
    orderBy?: Enumerable<WalkCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalkCareers.
     */
    cursor?: WalkCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkCareers.
     */
    skip?: number
    distinct?: Enumerable<WalkCareerScalarFieldEnum>
  }


  /**
   * WalkCareer create
   */
  export type WalkCareerCreateArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * The data needed to create a WalkCareer.
     */
    data: XOR<WalkCareerCreateInput, WalkCareerUncheckedCreateInput>
  }


  /**
   * WalkCareer createMany
   */
  export type WalkCareerCreateManyArgs = {
    /**
     * The data used to create many WalkCareers.
     */
    data: Enumerable<WalkCareerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WalkCareer update
   */
  export type WalkCareerUpdateArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * The data needed to update a WalkCareer.
     */
    data: XOR<WalkCareerUpdateInput, WalkCareerUncheckedUpdateInput>
    /**
     * Choose, which WalkCareer to update.
     */
    where: WalkCareerWhereUniqueInput
  }


  /**
   * WalkCareer updateMany
   */
  export type WalkCareerUpdateManyArgs = {
    /**
     * The data used to update WalkCareers.
     */
    data: XOR<WalkCareerUpdateManyMutationInput, WalkCareerUncheckedUpdateManyInput>
    /**
     * Filter which WalkCareers to update
     */
    where?: WalkCareerWhereInput
  }


  /**
   * WalkCareer upsert
   */
  export type WalkCareerUpsertArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * The filter to search for the WalkCareer to update in case it exists.
     */
    where: WalkCareerWhereUniqueInput
    /**
     * In case the WalkCareer found by the `where` argument doesn't exist, create a new WalkCareer with this data.
     */
    create: XOR<WalkCareerCreateInput, WalkCareerUncheckedCreateInput>
    /**
     * In case the WalkCareer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalkCareerUpdateInput, WalkCareerUncheckedUpdateInput>
  }


  /**
   * WalkCareer delete
   */
  export type WalkCareerDeleteArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    /**
     * Filter which WalkCareer to delete.
     */
    where: WalkCareerWhereUniqueInput
  }


  /**
   * WalkCareer deleteMany
   */
  export type WalkCareerDeleteManyArgs = {
    /**
     * Filter which WalkCareers to delete
     */
    where?: WalkCareerWhereInput
  }


  /**
   * WalkCareer without action
   */
  export type WalkCareerArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
  }



  /**
   * Model RunCareer
   */


  export type AggregateRunCareer = {
    _count: RunCareerCountAggregateOutputType | null
    _avg: RunCareerAvgAggregateOutputType | null
    _sum: RunCareerSumAggregateOutputType | null
    _min: RunCareerMinAggregateOutputType | null
    _max: RunCareerMaxAggregateOutputType | null
  }

  export type RunCareerAvgAggregateOutputType = {
    points: number | null
    kilometers: number | null
  }

  export type RunCareerSumAggregateOutputType = {
    points: number | null
    kilometers: number | null
  }

  export type RunCareerMinAggregateOutputType = {
    id: string | null
    points: number | null
    currentMonth: Date | null
    kilometers: number | null
    createAt: Date | null
    updateAt: Date | null
    careersId: string | null
  }

  export type RunCareerMaxAggregateOutputType = {
    id: string | null
    points: number | null
    currentMonth: Date | null
    kilometers: number | null
    createAt: Date | null
    updateAt: Date | null
    careersId: string | null
  }

  export type RunCareerCountAggregateOutputType = {
    id: number
    points: number
    currentMonth: number
    kilometers: number
    createAt: number
    updateAt: number
    careersId: number
    _all: number
  }


  export type RunCareerAvgAggregateInputType = {
    points?: true
    kilometers?: true
  }

  export type RunCareerSumAggregateInputType = {
    points?: true
    kilometers?: true
  }

  export type RunCareerMinAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
  }

  export type RunCareerMaxAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
  }

  export type RunCareerCountAggregateInputType = {
    id?: true
    points?: true
    currentMonth?: true
    kilometers?: true
    createAt?: true
    updateAt?: true
    careersId?: true
    _all?: true
  }

  export type RunCareerAggregateArgs = {
    /**
     * Filter which RunCareer to aggregate.
     */
    where?: RunCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunCareers to fetch.
     */
    orderBy?: Enumerable<RunCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunCareers
    **/
    _count?: true | RunCareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunCareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunCareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunCareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunCareerMaxAggregateInputType
  }

  export type GetRunCareerAggregateType<T extends RunCareerAggregateArgs> = {
        [P in keyof T & keyof AggregateRunCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunCareer[P]>
      : GetScalarType<T[P], AggregateRunCareer[P]>
  }




  export type RunCareerGroupByArgs = {
    where?: RunCareerWhereInput
    orderBy?: Enumerable<RunCareerOrderByWithAggregationInput>
    by: RunCareerScalarFieldEnum[]
    having?: RunCareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunCareerCountAggregateInputType | true
    _avg?: RunCareerAvgAggregateInputType
    _sum?: RunCareerSumAggregateInputType
    _min?: RunCareerMinAggregateInputType
    _max?: RunCareerMaxAggregateInputType
  }


  export type RunCareerGroupByOutputType = {
    id: string
    points: number
    currentMonth: Date
    kilometers: number
    createAt: Date
    updateAt: Date
    careersId: string
    _count: RunCareerCountAggregateOutputType | null
    _avg: RunCareerAvgAggregateOutputType | null
    _sum: RunCareerSumAggregateOutputType | null
    _min: RunCareerMinAggregateOutputType | null
    _max: RunCareerMaxAggregateOutputType | null
  }

  type GetRunCareerGroupByPayload<T extends RunCareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RunCareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunCareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunCareerGroupByOutputType[P]>
            : GetScalarType<T[P], RunCareerGroupByOutputType[P]>
        }
      >
    >


  export type RunCareerSelect = {
    id?: boolean
    points?: boolean
    currentMonth?: boolean
    kilometers?: boolean
    createAt?: boolean
    updateAt?: boolean
    careersId?: boolean
    career?: boolean | CareersArgs
  }


  export type RunCareerInclude = {
    career?: boolean | CareersArgs
  }

  export type RunCareerGetPayload<S extends boolean | null | undefined | RunCareerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RunCareer :
    S extends undefined ? never :
    S extends { include: any } & (RunCareerArgs | RunCareerFindManyArgs)
    ? RunCareer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'career' ? CareersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RunCareerArgs | RunCareerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'career' ? CareersGetPayload<S['select'][P]> :  P extends keyof RunCareer ? RunCareer[P] : never
  } 
      : RunCareer


  type RunCareerCountArgs = 
    Omit<RunCareerFindManyArgs, 'select' | 'include'> & {
      select?: RunCareerCountAggregateInputType | true
    }

  export interface RunCareerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RunCareer that matches the filter.
     * @param {RunCareerFindUniqueArgs} args - Arguments to find a RunCareer
     * @example
     * // Get one RunCareer
     * const runCareer = await prisma.runCareer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RunCareerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RunCareerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RunCareer'> extends True ? Prisma__RunCareerClient<RunCareerGetPayload<T>> : Prisma__RunCareerClient<RunCareerGetPayload<T> | null, null>

    /**
     * Find one RunCareer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RunCareerFindUniqueOrThrowArgs} args - Arguments to find a RunCareer
     * @example
     * // Get one RunCareer
     * const runCareer = await prisma.runCareer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RunCareerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RunCareerFindUniqueOrThrowArgs>
    ): Prisma__RunCareerClient<RunCareerGetPayload<T>>

    /**
     * Find the first RunCareer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerFindFirstArgs} args - Arguments to find a RunCareer
     * @example
     * // Get one RunCareer
     * const runCareer = await prisma.runCareer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RunCareerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RunCareerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RunCareer'> extends True ? Prisma__RunCareerClient<RunCareerGetPayload<T>> : Prisma__RunCareerClient<RunCareerGetPayload<T> | null, null>

    /**
     * Find the first RunCareer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerFindFirstOrThrowArgs} args - Arguments to find a RunCareer
     * @example
     * // Get one RunCareer
     * const runCareer = await prisma.runCareer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RunCareerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RunCareerFindFirstOrThrowArgs>
    ): Prisma__RunCareerClient<RunCareerGetPayload<T>>

    /**
     * Find zero or more RunCareers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunCareers
     * const runCareers = await prisma.runCareer.findMany()
     * 
     * // Get first 10 RunCareers
     * const runCareers = await prisma.runCareer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runCareerWithIdOnly = await prisma.runCareer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RunCareerFindManyArgs>(
      args?: SelectSubset<T, RunCareerFindManyArgs>
    ): Prisma.PrismaPromise<Array<RunCareerGetPayload<T>>>

    /**
     * Create a RunCareer.
     * @param {RunCareerCreateArgs} args - Arguments to create a RunCareer.
     * @example
     * // Create one RunCareer
     * const RunCareer = await prisma.runCareer.create({
     *   data: {
     *     // ... data to create a RunCareer
     *   }
     * })
     * 
    **/
    create<T extends RunCareerCreateArgs>(
      args: SelectSubset<T, RunCareerCreateArgs>
    ): Prisma__RunCareerClient<RunCareerGetPayload<T>>

    /**
     * Create many RunCareers.
     *     @param {RunCareerCreateManyArgs} args - Arguments to create many RunCareers.
     *     @example
     *     // Create many RunCareers
     *     const runCareer = await prisma.runCareer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RunCareerCreateManyArgs>(
      args?: SelectSubset<T, RunCareerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RunCareer.
     * @param {RunCareerDeleteArgs} args - Arguments to delete one RunCareer.
     * @example
     * // Delete one RunCareer
     * const RunCareer = await prisma.runCareer.delete({
     *   where: {
     *     // ... filter to delete one RunCareer
     *   }
     * })
     * 
    **/
    delete<T extends RunCareerDeleteArgs>(
      args: SelectSubset<T, RunCareerDeleteArgs>
    ): Prisma__RunCareerClient<RunCareerGetPayload<T>>

    /**
     * Update one RunCareer.
     * @param {RunCareerUpdateArgs} args - Arguments to update one RunCareer.
     * @example
     * // Update one RunCareer
     * const runCareer = await prisma.runCareer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RunCareerUpdateArgs>(
      args: SelectSubset<T, RunCareerUpdateArgs>
    ): Prisma__RunCareerClient<RunCareerGetPayload<T>>

    /**
     * Delete zero or more RunCareers.
     * @param {RunCareerDeleteManyArgs} args - Arguments to filter RunCareers to delete.
     * @example
     * // Delete a few RunCareers
     * const { count } = await prisma.runCareer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RunCareerDeleteManyArgs>(
      args?: SelectSubset<T, RunCareerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunCareers
     * const runCareer = await prisma.runCareer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RunCareerUpdateManyArgs>(
      args: SelectSubset<T, RunCareerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RunCareer.
     * @param {RunCareerUpsertArgs} args - Arguments to update or create a RunCareer.
     * @example
     * // Update or create a RunCareer
     * const runCareer = await prisma.runCareer.upsert({
     *   create: {
     *     // ... data to create a RunCareer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunCareer we want to update
     *   }
     * })
    **/
    upsert<T extends RunCareerUpsertArgs>(
      args: SelectSubset<T, RunCareerUpsertArgs>
    ): Prisma__RunCareerClient<RunCareerGetPayload<T>>

    /**
     * Count the number of RunCareers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerCountArgs} args - Arguments to filter RunCareers to count.
     * @example
     * // Count the number of RunCareers
     * const count = await prisma.runCareer.count({
     *   where: {
     *     // ... the filter for the RunCareers we want to count
     *   }
     * })
    **/
    count<T extends RunCareerCountArgs>(
      args?: Subset<T, RunCareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunCareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RunCareerAggregateArgs>(args: Subset<T, RunCareerAggregateArgs>): Prisma.PrismaPromise<GetRunCareerAggregateType<T>>

    /**
     * Group by RunCareer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RunCareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunCareerGroupByArgs['orderBy'] }
        : { orderBy?: RunCareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RunCareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RunCareer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RunCareerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    career<T extends CareersArgs= {}>(args?: Subset<T, CareersArgs>): Prisma__CareersClient<CareersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RunCareer base type for findUnique actions
   */
  export type RunCareerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * Filter, which RunCareer to fetch.
     */
    where: RunCareerWhereUniqueInput
  }

  /**
   * RunCareer findUnique
   */
  export interface RunCareerFindUniqueArgs extends RunCareerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RunCareer findUniqueOrThrow
   */
  export type RunCareerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * Filter, which RunCareer to fetch.
     */
    where: RunCareerWhereUniqueInput
  }


  /**
   * RunCareer base type for findFirst actions
   */
  export type RunCareerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * Filter, which RunCareer to fetch.
     */
    where?: RunCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunCareers to fetch.
     */
    orderBy?: Enumerable<RunCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunCareers.
     */
    cursor?: RunCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunCareers.
     */
    distinct?: Enumerable<RunCareerScalarFieldEnum>
  }

  /**
   * RunCareer findFirst
   */
  export interface RunCareerFindFirstArgs extends RunCareerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RunCareer findFirstOrThrow
   */
  export type RunCareerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * Filter, which RunCareer to fetch.
     */
    where?: RunCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunCareers to fetch.
     */
    orderBy?: Enumerable<RunCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunCareers.
     */
    cursor?: RunCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunCareers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunCareers.
     */
    distinct?: Enumerable<RunCareerScalarFieldEnum>
  }


  /**
   * RunCareer findMany
   */
  export type RunCareerFindManyArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * Filter, which RunCareers to fetch.
     */
    where?: RunCareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunCareers to fetch.
     */
    orderBy?: Enumerable<RunCareerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunCareers.
     */
    cursor?: RunCareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunCareers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunCareers.
     */
    skip?: number
    distinct?: Enumerable<RunCareerScalarFieldEnum>
  }


  /**
   * RunCareer create
   */
  export type RunCareerCreateArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * The data needed to create a RunCareer.
     */
    data: XOR<RunCareerCreateInput, RunCareerUncheckedCreateInput>
  }


  /**
   * RunCareer createMany
   */
  export type RunCareerCreateManyArgs = {
    /**
     * The data used to create many RunCareers.
     */
    data: Enumerable<RunCareerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RunCareer update
   */
  export type RunCareerUpdateArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * The data needed to update a RunCareer.
     */
    data: XOR<RunCareerUpdateInput, RunCareerUncheckedUpdateInput>
    /**
     * Choose, which RunCareer to update.
     */
    where: RunCareerWhereUniqueInput
  }


  /**
   * RunCareer updateMany
   */
  export type RunCareerUpdateManyArgs = {
    /**
     * The data used to update RunCareers.
     */
    data: XOR<RunCareerUpdateManyMutationInput, RunCareerUncheckedUpdateManyInput>
    /**
     * Filter which RunCareers to update
     */
    where?: RunCareerWhereInput
  }


  /**
   * RunCareer upsert
   */
  export type RunCareerUpsertArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * The filter to search for the RunCareer to update in case it exists.
     */
    where: RunCareerWhereUniqueInput
    /**
     * In case the RunCareer found by the `where` argument doesn't exist, create a new RunCareer with this data.
     */
    create: XOR<RunCareerCreateInput, RunCareerUncheckedCreateInput>
    /**
     * In case the RunCareer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunCareerUpdateInput, RunCareerUncheckedUpdateInput>
  }


  /**
   * RunCareer delete
   */
  export type RunCareerDeleteArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    /**
     * Filter which RunCareer to delete.
     */
    where: RunCareerWhereUniqueInput
  }


  /**
   * RunCareer deleteMany
   */
  export type RunCareerDeleteManyArgs = {
    /**
     * Filter which RunCareers to delete
     */
    where?: RunCareerWhereInput
  }


  /**
   * RunCareer without action
   */
  export type RunCareerArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
  }



  /**
   * Model Careers
   */


  export type AggregateCareers = {
    _count: CareersCountAggregateOutputType | null
    _min: CareersMinAggregateOutputType | null
    _max: CareersMaxAggregateOutputType | null
  }

  export type CareersMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
  }

  export type CareersMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
  }

  export type CareersCountAggregateOutputType = {
    id: number
    employeeId: number
    _all: number
  }


  export type CareersMinAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type CareersMaxAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type CareersCountAggregateInputType = {
    id?: true
    employeeId?: true
    _all?: true
  }

  export type CareersAggregateArgs = {
    /**
     * Filter which Careers to aggregate.
     */
    where?: CareersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: Enumerable<CareersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareersMaxAggregateInputType
  }

  export type GetCareersAggregateType<T extends CareersAggregateArgs> = {
        [P in keyof T & keyof AggregateCareers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareers[P]>
      : GetScalarType<T[P], AggregateCareers[P]>
  }




  export type CareersGroupByArgs = {
    where?: CareersWhereInput
    orderBy?: Enumerable<CareersOrderByWithAggregationInput>
    by: CareersScalarFieldEnum[]
    having?: CareersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareersCountAggregateInputType | true
    _min?: CareersMinAggregateInputType
    _max?: CareersMaxAggregateInputType
  }


  export type CareersGroupByOutputType = {
    id: string
    employeeId: string
    _count: CareersCountAggregateOutputType | null
    _min: CareersMinAggregateOutputType | null
    _max: CareersMaxAggregateOutputType | null
  }

  type GetCareersGroupByPayload<T extends CareersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CareersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareersGroupByOutputType[P]>
            : GetScalarType<T[P], CareersGroupByOutputType[P]>
        }
      >
    >


  export type CareersSelect = {
    id?: boolean
    employeeId?: boolean
    cycleCareer?: boolean | Careers$cycleCareerArgs
    walkCareer?: boolean | Careers$walkCareerArgs
    runCareer?: boolean | Careers$runCareerArgs
    employee?: boolean | EmployeeArgs
    _count?: boolean | CareersCountOutputTypeArgs
  }


  export type CareersInclude = {
    cycleCareer?: boolean | Careers$cycleCareerArgs
    walkCareer?: boolean | Careers$walkCareerArgs
    runCareer?: boolean | Careers$runCareerArgs
    employee?: boolean | EmployeeArgs
    _count?: boolean | CareersCountOutputTypeArgs
  }

  export type CareersGetPayload<S extends boolean | null | undefined | CareersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Careers :
    S extends undefined ? never :
    S extends { include: any } & (CareersArgs | CareersFindManyArgs)
    ? Careers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cycleCareer' ? Array < CycleCareerGetPayload<S['include'][P]>>  :
        P extends 'walkCareer' ? Array < WalkCareerGetPayload<S['include'][P]>>  :
        P extends 'runCareer' ? Array < RunCareerGetPayload<S['include'][P]>>  :
        P extends 'employee' ? EmployeeGetPayload<S['include'][P]> :
        P extends '_count' ? CareersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CareersArgs | CareersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cycleCareer' ? Array < CycleCareerGetPayload<S['select'][P]>>  :
        P extends 'walkCareer' ? Array < WalkCareerGetPayload<S['select'][P]>>  :
        P extends 'runCareer' ? Array < RunCareerGetPayload<S['select'][P]>>  :
        P extends 'employee' ? EmployeeGetPayload<S['select'][P]> :
        P extends '_count' ? CareersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Careers ? Careers[P] : never
  } 
      : Careers


  type CareersCountArgs = 
    Omit<CareersFindManyArgs, 'select' | 'include'> & {
      select?: CareersCountAggregateInputType | true
    }

  export interface CareersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Careers that matches the filter.
     * @param {CareersFindUniqueArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CareersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CareersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Careers'> extends True ? Prisma__CareersClient<CareersGetPayload<T>> : Prisma__CareersClient<CareersGetPayload<T> | null, null>

    /**
     * Find one Careers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CareersFindUniqueOrThrowArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CareersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CareersFindUniqueOrThrowArgs>
    ): Prisma__CareersClient<CareersGetPayload<T>>

    /**
     * Find the first Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersFindFirstArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CareersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CareersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Careers'> extends True ? Prisma__CareersClient<CareersGetPayload<T>> : Prisma__CareersClient<CareersGetPayload<T> | null, null>

    /**
     * Find the first Careers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersFindFirstOrThrowArgs} args - Arguments to find a Careers
     * @example
     * // Get one Careers
     * const careers = await prisma.careers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CareersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CareersFindFirstOrThrowArgs>
    ): Prisma__CareersClient<CareersGetPayload<T>>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.careers.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.careers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careersWithIdOnly = await prisma.careers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CareersFindManyArgs>(
      args?: SelectSubset<T, CareersFindManyArgs>
    ): Prisma.PrismaPromise<Array<CareersGetPayload<T>>>

    /**
     * Create a Careers.
     * @param {CareersCreateArgs} args - Arguments to create a Careers.
     * @example
     * // Create one Careers
     * const Careers = await prisma.careers.create({
     *   data: {
     *     // ... data to create a Careers
     *   }
     * })
     * 
    **/
    create<T extends CareersCreateArgs>(
      args: SelectSubset<T, CareersCreateArgs>
    ): Prisma__CareersClient<CareersGetPayload<T>>

    /**
     * Create many Careers.
     *     @param {CareersCreateManyArgs} args - Arguments to create many Careers.
     *     @example
     *     // Create many Careers
     *     const careers = await prisma.careers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CareersCreateManyArgs>(
      args?: SelectSubset<T, CareersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Careers.
     * @param {CareersDeleteArgs} args - Arguments to delete one Careers.
     * @example
     * // Delete one Careers
     * const Careers = await prisma.careers.delete({
     *   where: {
     *     // ... filter to delete one Careers
     *   }
     * })
     * 
    **/
    delete<T extends CareersDeleteArgs>(
      args: SelectSubset<T, CareersDeleteArgs>
    ): Prisma__CareersClient<CareersGetPayload<T>>

    /**
     * Update one Careers.
     * @param {CareersUpdateArgs} args - Arguments to update one Careers.
     * @example
     * // Update one Careers
     * const careers = await prisma.careers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CareersUpdateArgs>(
      args: SelectSubset<T, CareersUpdateArgs>
    ): Prisma__CareersClient<CareersGetPayload<T>>

    /**
     * Delete zero or more Careers.
     * @param {CareersDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.careers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CareersDeleteManyArgs>(
      args?: SelectSubset<T, CareersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const careers = await prisma.careers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CareersUpdateManyArgs>(
      args: SelectSubset<T, CareersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Careers.
     * @param {CareersUpsertArgs} args - Arguments to update or create a Careers.
     * @example
     * // Update or create a Careers
     * const careers = await prisma.careers.upsert({
     *   create: {
     *     // ... data to create a Careers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Careers we want to update
     *   }
     * })
    **/
    upsert<T extends CareersUpsertArgs>(
      args: SelectSubset<T, CareersUpsertArgs>
    ): Prisma__CareersClient<CareersGetPayload<T>>

    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.careers.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareersCountArgs>(
      args?: Subset<T, CareersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareersAggregateArgs>(args: Subset<T, CareersAggregateArgs>): Prisma.PrismaPromise<GetCareersAggregateType<T>>

    /**
     * Group by Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareersGroupByArgs['orderBy'] }
        : { orderBy?: CareersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Careers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CareersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cycleCareer<T extends Careers$cycleCareerArgs= {}>(args?: Subset<T, Careers$cycleCareerArgs>): Prisma.PrismaPromise<Array<CycleCareerGetPayload<T>>| Null>;

    walkCareer<T extends Careers$walkCareerArgs= {}>(args?: Subset<T, Careers$walkCareerArgs>): Prisma.PrismaPromise<Array<WalkCareerGetPayload<T>>| Null>;

    runCareer<T extends Careers$runCareerArgs= {}>(args?: Subset<T, Careers$runCareerArgs>): Prisma.PrismaPromise<Array<RunCareerGetPayload<T>>| Null>;

    employee<T extends EmployeeArgs= {}>(args?: Subset<T, EmployeeArgs>): Prisma__EmployeeClient<EmployeeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Careers base type for findUnique actions
   */
  export type CareersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * Filter, which Careers to fetch.
     */
    where: CareersWhereUniqueInput
  }

  /**
   * Careers findUnique
   */
  export interface CareersFindUniqueArgs extends CareersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Careers findUniqueOrThrow
   */
  export type CareersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * Filter, which Careers to fetch.
     */
    where: CareersWhereUniqueInput
  }


  /**
   * Careers base type for findFirst actions
   */
  export type CareersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: Enumerable<CareersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: Enumerable<CareersScalarFieldEnum>
  }

  /**
   * Careers findFirst
   */
  export interface CareersFindFirstArgs extends CareersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Careers findFirstOrThrow
   */
  export type CareersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: Enumerable<CareersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: Enumerable<CareersScalarFieldEnum>
  }


  /**
   * Careers findMany
   */
  export type CareersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: Enumerable<CareersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: Enumerable<CareersScalarFieldEnum>
  }


  /**
   * Careers create
   */
  export type CareersCreateArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * The data needed to create a Careers.
     */
    data: XOR<CareersCreateInput, CareersUncheckedCreateInput>
  }


  /**
   * Careers createMany
   */
  export type CareersCreateManyArgs = {
    /**
     * The data used to create many Careers.
     */
    data: Enumerable<CareersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Careers update
   */
  export type CareersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * The data needed to update a Careers.
     */
    data: XOR<CareersUpdateInput, CareersUncheckedUpdateInput>
    /**
     * Choose, which Careers to update.
     */
    where: CareersWhereUniqueInput
  }


  /**
   * Careers updateMany
   */
  export type CareersUpdateManyArgs = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareersUpdateManyMutationInput, CareersUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareersWhereInput
  }


  /**
   * Careers upsert
   */
  export type CareersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * The filter to search for the Careers to update in case it exists.
     */
    where: CareersWhereUniqueInput
    /**
     * In case the Careers found by the `where` argument doesn't exist, create a new Careers with this data.
     */
    create: XOR<CareersCreateInput, CareersUncheckedCreateInput>
    /**
     * In case the Careers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareersUpdateInput, CareersUncheckedUpdateInput>
  }


  /**
   * Careers delete
   */
  export type CareersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
    /**
     * Filter which Careers to delete.
     */
    where: CareersWhereUniqueInput
  }


  /**
   * Careers deleteMany
   */
  export type CareersDeleteManyArgs = {
    /**
     * Filter which Careers to delete
     */
    where?: CareersWhereInput
  }


  /**
   * Careers.cycleCareer
   */
  export type Careers$cycleCareerArgs = {
    /**
     * Select specific fields to fetch from the CycleCareer
     */
    select?: CycleCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CycleCareerInclude | null
    where?: CycleCareerWhereInput
    orderBy?: Enumerable<CycleCareerOrderByWithRelationInput>
    cursor?: CycleCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CycleCareerScalarFieldEnum>
  }


  /**
   * Careers.walkCareer
   */
  export type Careers$walkCareerArgs = {
    /**
     * Select specific fields to fetch from the WalkCareer
     */
    select?: WalkCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WalkCareerInclude | null
    where?: WalkCareerWhereInput
    orderBy?: Enumerable<WalkCareerOrderByWithRelationInput>
    cursor?: WalkCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WalkCareerScalarFieldEnum>
  }


  /**
   * Careers.runCareer
   */
  export type Careers$runCareerArgs = {
    /**
     * Select specific fields to fetch from the RunCareer
     */
    select?: RunCareerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RunCareerInclude | null
    where?: RunCareerWhereInput
    orderBy?: Enumerable<RunCareerOrderByWithRelationInput>
    cursor?: RunCareerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RunCareerScalarFieldEnum>
  }


  /**
   * Careers without action
   */
  export type CareersArgs = {
    /**
     * Select specific fields to fetch from the Careers
     */
    select?: CareersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CareersInclude | null
  }



  /**
   * Model Posts
   */


  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    _all?: true
  }

  export type PostsAggregateArgs = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs = {
    where?: PostsWhereInput
    orderBy?: Enumerable<PostsOrderByWithAggregationInput>
    by: PostsScalarFieldEnum[]
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }


  export type PostsGroupByOutputType = {
    id: string
    title: string
    content: string
    authorId: string
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    comments?: boolean | Posts$commentsArgs
    author?: boolean | EmployeeArgs
    _count?: boolean | PostsCountOutputTypeArgs
  }


  export type PostsInclude = {
    comments?: boolean | Posts$commentsArgs
    author?: boolean | EmployeeArgs
    _count?: boolean | PostsCountOutputTypeArgs
  }

  export type PostsGetPayload<S extends boolean | null | undefined | PostsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Posts :
    S extends undefined ? never :
    S extends { include: any } & (PostsArgs | PostsFindManyArgs)
    ? Posts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'comments' ? Array < CommentsGetPayload<S['include'][P]>>  :
        P extends 'author' ? EmployeeGetPayload<S['include'][P]> :
        P extends '_count' ? PostsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostsArgs | PostsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'comments' ? Array < CommentsGetPayload<S['select'][P]>>  :
        P extends 'author' ? EmployeeGetPayload<S['select'][P]> :
        P extends '_count' ? PostsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Posts ? Posts[P] : never
  } 
      : Posts


  type PostsCountArgs = 
    Omit<PostsFindManyArgs, 'select' | 'include'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Posts'> extends True ? Prisma__PostsClient<PostsGetPayload<T>> : Prisma__PostsClient<PostsGetPayload<T> | null, null>

    /**
     * Find one Posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostsFindUniqueOrThrowArgs>
    ): Prisma__PostsClient<PostsGetPayload<T>>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Posts'> extends True ? Prisma__PostsClient<PostsGetPayload<T>> : Prisma__PostsClient<PostsGetPayload<T> | null, null>

    /**
     * Find the first Posts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostsFindFirstOrThrowArgs>
    ): Prisma__PostsClient<PostsGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostsFindManyArgs>(
      args?: SelectSubset<T, PostsFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostsGetPayload<T>>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends PostsCreateArgs>(
      args: SelectSubset<T, PostsCreateArgs>
    ): Prisma__PostsClient<PostsGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostsCreateManyArgs>(
      args?: SelectSubset<T, PostsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends PostsDeleteArgs>(
      args: SelectSubset<T, PostsDeleteArgs>
    ): Prisma__PostsClient<PostsGetPayload<T>>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostsUpdateArgs>(
      args: SelectSubset<T, PostsUpdateArgs>
    ): Prisma__PostsClient<PostsGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostsDeleteManyArgs>(
      args?: SelectSubset<T, PostsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostsUpdateManyArgs>(
      args: SelectSubset<T, PostsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends PostsUpsertArgs>(
      args: SelectSubset<T, PostsUpsertArgs>
    ): Prisma__PostsClient<PostsGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    comments<T extends Posts$commentsArgs= {}>(args?: Subset<T, Posts$commentsArgs>): Prisma.PrismaPromise<Array<CommentsGetPayload<T>>| Null>;

    author<T extends EmployeeArgs= {}>(args?: Subset<T, EmployeeArgs>): Prisma__EmployeeClient<EmployeeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Posts base type for findUnique actions
   */
  export type PostsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUnique
   */
  export interface PostsFindUniqueArgs extends PostsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts base type for findFirst actions
   */
  export type PostsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostsScalarFieldEnum>
  }

  /**
   * Posts findFirst
   */
  export interface PostsFindFirstArgs extends PostsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * Posts findMany
   */
  export type PostsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * Posts create
   */
  export type PostsCreateArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }


  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs = {
    /**
     * The data used to create many Posts.
     */
    data: Enumerable<PostsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Posts update
   */
  export type PostsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
  }


  /**
   * Posts upsert
   */
  export type PostsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }


  /**
   * Posts delete
   */
  export type PostsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }


  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
  }


  /**
   * Posts.comments
   */
  export type Posts$commentsArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    where?: CommentsWhereInput
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * Posts without action
   */
  export type PostsArgs = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostsInclude | null
  }



  /**
   * Model Comments
   */


  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    authorId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    authorId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    postId: number
    authorId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    authorId?: true
    createAt?: true
    updateAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    authorId?: true
    createAt?: true
    updateAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    authorId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs = {
    where?: CommentsWhereInput
    orderBy?: Enumerable<CommentsOrderByWithAggregationInput>
    by: CommentsScalarFieldEnum[]
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }


  export type CommentsGroupByOutputType = {
    id: string
    content: string
    postId: string
    authorId: string
    createAt: Date
    updateAt: Date
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect = {
    id?: boolean
    content?: boolean
    postId?: boolean
    authorId?: boolean
    createAt?: boolean
    updateAt?: boolean
    post?: boolean | PostsArgs
    author?: boolean | EmployeeArgs
  }


  export type CommentsInclude = {
    post?: boolean | PostsArgs
    author?: boolean | EmployeeArgs
  }

  export type CommentsGetPayload<S extends boolean | null | undefined | CommentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Comments :
    S extends undefined ? never :
    S extends { include: any } & (CommentsArgs | CommentsFindManyArgs)
    ? Comments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostsGetPayload<S['include'][P]> :
        P extends 'author' ? EmployeeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CommentsArgs | CommentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostsGetPayload<S['select'][P]> :
        P extends 'author' ? EmployeeGetPayload<S['select'][P]> :  P extends keyof Comments ? Comments[P] : never
  } 
      : Comments


  type CommentsCountArgs = 
    Omit<CommentsFindManyArgs, 'select' | 'include'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comments'> extends True ? Prisma__CommentsClient<CommentsGetPayload<T>> : Prisma__CommentsClient<CommentsGetPayload<T> | null, null>

    /**
     * Find one Comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommentsFindUniqueOrThrowArgs>
    ): Prisma__CommentsClient<CommentsGetPayload<T>>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comments'> extends True ? Prisma__CommentsClient<CommentsGetPayload<T>> : Prisma__CommentsClient<CommentsGetPayload<T> | null, null>

    /**
     * Find the first Comments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentsFindFirstOrThrowArgs>
    ): Prisma__CommentsClient<CommentsGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentsFindManyArgs>(
      args?: SelectSubset<T, CommentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<CommentsGetPayload<T>>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends CommentsCreateArgs>(
      args: SelectSubset<T, CommentsCreateArgs>
    ): Prisma__CommentsClient<CommentsGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentsCreateManyArgs>(
      args?: SelectSubset<T, CommentsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends CommentsDeleteArgs>(
      args: SelectSubset<T, CommentsDeleteArgs>
    ): Prisma__CommentsClient<CommentsGetPayload<T>>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentsUpdateArgs>(
      args: SelectSubset<T, CommentsUpdateArgs>
    ): Prisma__CommentsClient<CommentsGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentsDeleteManyArgs>(
      args?: SelectSubset<T, CommentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentsUpdateManyArgs>(
      args: SelectSubset<T, CommentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends CommentsUpsertArgs>(
      args: SelectSubset<T, CommentsUpsertArgs>
    ): Prisma__CommentsClient<CommentsGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    post<T extends PostsArgs= {}>(args?: Subset<T, PostsArgs>): Prisma__PostsClient<PostsGetPayload<T> | Null>;

    author<T extends EmployeeArgs= {}>(args?: Subset<T, EmployeeArgs>): Prisma__EmployeeClient<EmployeeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Comments base type for findUnique actions
   */
  export type CommentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUnique
   */
  export interface CommentsFindUniqueArgs extends CommentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments base type for findFirst actions
   */
  export type CommentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }

  /**
   * Comments findFirst
   */
  export interface CommentsFindFirstArgs extends CommentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * Comments create
   */
  export type CommentsCreateArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }


  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs = {
    /**
     * The data used to create many Comments.
     */
    data: Enumerable<CommentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comments update
   */
  export type CommentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
  }


  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }


  /**
   * Comments delete
   */
  export type CommentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }


  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
  }


  /**
   * Comments without action
   */
  export type CommentsArgs = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CareersScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId'
  };

  export type CareersScalarFieldEnum = (typeof CareersScalarFieldEnum)[keyof typeof CareersScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postId: 'postId',
    authorId: 'authorId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const CycleCareerScalarFieldEnum: {
    id: 'id',
    points: 'points',
    currentMonth: 'currentMonth',
    kilometers: 'kilometers',
    createAt: 'createAt',
    updateAt: 'updateAt',
    careersId: 'careersId'
  };

  export type CycleCareerScalarFieldEnum = (typeof CycleCareerScalarFieldEnum)[keyof typeof CycleCareerScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
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

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RunCareerScalarFieldEnum: {
    id: 'id',
    points: 'points',
    currentMonth: 'currentMonth',
    kilometers: 'kilometers',
    createAt: 'createAt',
    updateAt: 'updateAt',
    careersId: 'careersId'
  };

  export type RunCareerScalarFieldEnum = (typeof RunCareerScalarFieldEnum)[keyof typeof RunCareerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WalkCareerScalarFieldEnum: {
    id: 'id',
    points: 'points',
    currentMonth: 'currentMonth',
    kilometers: 'kilometers',
    createAt: 'createAt',
    updateAt: 'updateAt',
    careersId: 'careersId'
  };

  export type WalkCareerScalarFieldEnum = (typeof WalkCareerScalarFieldEnum)[keyof typeof WalkCareerScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: Enumerable<EmployeeWhereInput>
    OR?: Enumerable<EmployeeWhereInput>
    NOT?: Enumerable<EmployeeWhereInput>
    id?: StringFilter | string
    fullName?: StringFilter | string
    dni?: IntFilter | number
    username?: StringFilter | string
    phone?: StringFilter | string
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careers?: CareersListRelationFilter
    post?: PostsListRelationFilter
    comments?: CommentsListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    dni?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careers?: CareersOrderByRelationAggregateInput
    post?: PostsOrderByRelationAggregateInput
    comments?: CommentsOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = {
    id?: string
    dni?: number
    username?: string
  }

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    dni?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    fullName?: StringWithAggregatesFilter | string
    dni?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CycleCareerWhereInput = {
    AND?: Enumerable<CycleCareerWhereInput>
    OR?: Enumerable<CycleCareerWhereInput>
    NOT?: Enumerable<CycleCareerWhereInput>
    id?: StringFilter | string
    points?: IntFilter | number
    currentMonth?: DateTimeFilter | Date | string
    kilometers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careersId?: StringFilter | string
    career?: XOR<CareersRelationFilter, CareersWhereInput>
  }

  export type CycleCareerOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
    career?: CareersOrderByWithRelationInput
  }

  export type CycleCareerWhereUniqueInput = {
    id?: string
  }

  export type CycleCareerOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
    _count?: CycleCareerCountOrderByAggregateInput
    _avg?: CycleCareerAvgOrderByAggregateInput
    _max?: CycleCareerMaxOrderByAggregateInput
    _min?: CycleCareerMinOrderByAggregateInput
    _sum?: CycleCareerSumOrderByAggregateInput
  }

  export type CycleCareerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CycleCareerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CycleCareerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CycleCareerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    points?: IntWithAggregatesFilter | number
    currentMonth?: DateTimeWithAggregatesFilter | Date | string
    kilometers?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    careersId?: StringWithAggregatesFilter | string
  }

  export type WalkCareerWhereInput = {
    AND?: Enumerable<WalkCareerWhereInput>
    OR?: Enumerable<WalkCareerWhereInput>
    NOT?: Enumerable<WalkCareerWhereInput>
    id?: StringFilter | string
    points?: IntFilter | number
    currentMonth?: DateTimeFilter | Date | string
    kilometers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careersId?: StringFilter | string
    career?: XOR<CareersRelationFilter, CareersWhereInput>
  }

  export type WalkCareerOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
    career?: CareersOrderByWithRelationInput
  }

  export type WalkCareerWhereUniqueInput = {
    id?: string
  }

  export type WalkCareerOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
    _count?: WalkCareerCountOrderByAggregateInput
    _avg?: WalkCareerAvgOrderByAggregateInput
    _max?: WalkCareerMaxOrderByAggregateInput
    _min?: WalkCareerMinOrderByAggregateInput
    _sum?: WalkCareerSumOrderByAggregateInput
  }

  export type WalkCareerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WalkCareerScalarWhereWithAggregatesInput>
    OR?: Enumerable<WalkCareerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WalkCareerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    points?: IntWithAggregatesFilter | number
    currentMonth?: DateTimeWithAggregatesFilter | Date | string
    kilometers?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    careersId?: StringWithAggregatesFilter | string
  }

  export type RunCareerWhereInput = {
    AND?: Enumerable<RunCareerWhereInput>
    OR?: Enumerable<RunCareerWhereInput>
    NOT?: Enumerable<RunCareerWhereInput>
    id?: StringFilter | string
    points?: IntFilter | number
    currentMonth?: DateTimeFilter | Date | string
    kilometers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careersId?: StringFilter | string
    career?: XOR<CareersRelationFilter, CareersWhereInput>
  }

  export type RunCareerOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
    career?: CareersOrderByWithRelationInput
  }

  export type RunCareerWhereUniqueInput = {
    id?: string
  }

  export type RunCareerOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
    _count?: RunCareerCountOrderByAggregateInput
    _avg?: RunCareerAvgOrderByAggregateInput
    _max?: RunCareerMaxOrderByAggregateInput
    _min?: RunCareerMinOrderByAggregateInput
    _sum?: RunCareerSumOrderByAggregateInput
  }

  export type RunCareerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RunCareerScalarWhereWithAggregatesInput>
    OR?: Enumerable<RunCareerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RunCareerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    points?: IntWithAggregatesFilter | number
    currentMonth?: DateTimeWithAggregatesFilter | Date | string
    kilometers?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    careersId?: StringWithAggregatesFilter | string
  }

  export type CareersWhereInput = {
    AND?: Enumerable<CareersWhereInput>
    OR?: Enumerable<CareersWhereInput>
    NOT?: Enumerable<CareersWhereInput>
    id?: StringFilter | string
    employeeId?: StringFilter | string
    cycleCareer?: CycleCareerListRelationFilter
    walkCareer?: WalkCareerListRelationFilter
    runCareer?: RunCareerListRelationFilter
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }

  export type CareersOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    cycleCareer?: CycleCareerOrderByRelationAggregateInput
    walkCareer?: WalkCareerOrderByRelationAggregateInput
    runCareer?: RunCareerOrderByRelationAggregateInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type CareersWhereUniqueInput = {
    id?: string
  }

  export type CareersOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    _count?: CareersCountOrderByAggregateInput
    _max?: CareersMaxOrderByAggregateInput
    _min?: CareersMinOrderByAggregateInput
  }

  export type CareersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CareersScalarWhereWithAggregatesInput>
    OR?: Enumerable<CareersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CareersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    employeeId?: StringWithAggregatesFilter | string
  }

  export type PostsWhereInput = {
    AND?: Enumerable<PostsWhereInput>
    OR?: Enumerable<PostsWhereInput>
    NOT?: Enumerable<PostsWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    authorId?: StringFilter | string
    comments?: CommentsListRelationFilter
    author?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    comments?: CommentsOrderByRelationAggregateInput
    author?: EmployeeOrderByWithRelationInput
  }

  export type PostsWhereUniqueInput = {
    id?: string
  }

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostsScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
  }

  export type CommentsWhereInput = {
    AND?: Enumerable<CommentsWhereInput>
    OR?: Enumerable<CommentsWhereInput>
    NOT?: Enumerable<CommentsWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    postId?: StringFilter | string
    authorId?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    post?: XOR<PostsRelationFilter, PostsWhereInput>
    author?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    post?: PostsOrderByWithRelationInput
    author?: EmployeeOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = {
    id?: string
  }

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    careers?: CareersCreateNestedManyWithoutEmployeeInput
    post?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    careers?: CareersUncheckedCreateNestedManyWithoutEmployeeInput
    post?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareersUpdateManyWithoutEmployeeNestedInput
    post?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareersUncheckedUpdateManyWithoutEmployeeNestedInput
    post?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCareerCreateInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    career: CareersCreateNestedOneWithoutCycleCareerInput
  }

  export type CycleCareerUncheckedCreateInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    careersId: string
  }

  export type CycleCareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareersUpdateOneRequiredWithoutCycleCareerNestedInput
  }

  export type CycleCareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careersId?: StringFieldUpdateOperationsInput | string
  }

  export type CycleCareerCreateManyInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    careersId: string
  }

  export type CycleCareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careersId?: StringFieldUpdateOperationsInput | string
  }

  export type WalkCareerCreateInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    career: CareersCreateNestedOneWithoutWalkCareerInput
  }

  export type WalkCareerUncheckedCreateInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    careersId: string
  }

  export type WalkCareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareersUpdateOneRequiredWithoutWalkCareerNestedInput
  }

  export type WalkCareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careersId?: StringFieldUpdateOperationsInput | string
  }

  export type WalkCareerCreateManyInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    careersId: string
  }

  export type WalkCareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalkCareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careersId?: StringFieldUpdateOperationsInput | string
  }

  export type RunCareerCreateInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    career: CareersCreateNestedOneWithoutRunCareerInput
  }

  export type RunCareerUncheckedCreateInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    careersId: string
  }

  export type RunCareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareersUpdateOneRequiredWithoutRunCareerNestedInput
  }

  export type RunCareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careersId?: StringFieldUpdateOperationsInput | string
  }

  export type RunCareerCreateManyInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
    careersId: string
  }

  export type RunCareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careersId?: StringFieldUpdateOperationsInput | string
  }

  export type CareersCreateInput = {
    id?: string
    cycleCareer?: CycleCareerCreateNestedManyWithoutCareerInput
    walkCareer?: WalkCareerCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerCreateNestedManyWithoutCareerInput
    employee: EmployeeCreateNestedOneWithoutCareersInput
  }

  export type CareersUncheckedCreateInput = {
    id?: string
    employeeId: string
    cycleCareer?: CycleCareerUncheckedCreateNestedManyWithoutCareerInput
    walkCareer?: WalkCareerUncheckedCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUpdateManyWithoutCareerNestedInput
    walkCareer?: WalkCareerUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUpdateManyWithoutCareerNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUncheckedUpdateManyWithoutCareerNestedInput
    walkCareer?: WalkCareerUncheckedUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareersCreateManyInput = {
    id?: string
    employeeId: string
  }

  export type CareersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CareersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PostsCreateInput = {
    id?: string
    title: string
    content: string
    comments?: CommentsCreateNestedManyWithoutPostInput
    author: EmployeeCreateNestedOneWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    comments?: CommentsUpdateManyWithoutPostNestedInput
    author?: EmployeeUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    title: string
    content: string
    authorId: string
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
    author: EmployeeCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    content: string
    postId: string
    authorId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
    author?: EmployeeUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    id?: string
    content: string
    postId: string
    authorId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CareersListRelationFilter = {
    every?: CareersWhereInput
    some?: CareersWhereInput
    none?: CareersWhereInput
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type CareersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    dni?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    dni?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    dni?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    dni?: SortOrder
    username?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    dni?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CareersRelationFilter = {
    is?: CareersWhereInput
    isNot?: CareersWhereInput
  }

  export type CycleCareerCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type CycleCareerAvgOrderByAggregateInput = {
    points?: SortOrder
    kilometers?: SortOrder
  }

  export type CycleCareerMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type CycleCareerMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type CycleCareerSumOrderByAggregateInput = {
    points?: SortOrder
    kilometers?: SortOrder
  }

  export type WalkCareerCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type WalkCareerAvgOrderByAggregateInput = {
    points?: SortOrder
    kilometers?: SortOrder
  }

  export type WalkCareerMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type WalkCareerMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type WalkCareerSumOrderByAggregateInput = {
    points?: SortOrder
    kilometers?: SortOrder
  }

  export type RunCareerCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type RunCareerAvgOrderByAggregateInput = {
    points?: SortOrder
    kilometers?: SortOrder
  }

  export type RunCareerMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type RunCareerMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    currentMonth?: SortOrder
    kilometers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    careersId?: SortOrder
  }

  export type RunCareerSumOrderByAggregateInput = {
    points?: SortOrder
    kilometers?: SortOrder
  }

  export type CycleCareerListRelationFilter = {
    every?: CycleCareerWhereInput
    some?: CycleCareerWhereInput
    none?: CycleCareerWhereInput
  }

  export type WalkCareerListRelationFilter = {
    every?: WalkCareerWhereInput
    some?: WalkCareerWhereInput
    none?: WalkCareerWhereInput
  }

  export type RunCareerListRelationFilter = {
    every?: RunCareerWhereInput
    some?: RunCareerWhereInput
    none?: RunCareerWhereInput
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type CycleCareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalkCareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunCareerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareersCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type CareersMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type CareersMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
  }

  export type PostsRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CareersCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<CareersCreateWithoutEmployeeInput>, Enumerable<CareersUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<CareersCreateOrConnectWithoutEmployeeInput>
    createMany?: CareersCreateManyEmployeeInputEnvelope
    connect?: Enumerable<CareersWhereUniqueInput>
  }

  export type PostsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostsCreateWithoutAuthorInput>, Enumerable<PostsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostsCreateOrConnectWithoutAuthorInput>
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostsWhereUniqueInput>
  }

  export type CommentsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutAuthorInput>, Enumerable<CommentsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutAuthorInput>
    createMany?: CommentsCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type CareersUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<Enumerable<CareersCreateWithoutEmployeeInput>, Enumerable<CareersUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<CareersCreateOrConnectWithoutEmployeeInput>
    createMany?: CareersCreateManyEmployeeInputEnvelope
    connect?: Enumerable<CareersWhereUniqueInput>
  }

  export type PostsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostsCreateWithoutAuthorInput>, Enumerable<PostsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostsCreateOrConnectWithoutAuthorInput>
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostsWhereUniqueInput>
  }

  export type CommentsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutAuthorInput>, Enumerable<CommentsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutAuthorInput>
    createMany?: CommentsCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CareersUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Enumerable<CareersCreateWithoutEmployeeInput>, Enumerable<CareersUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<CareersCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<CareersUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: CareersCreateManyEmployeeInputEnvelope
    set?: Enumerable<CareersWhereUniqueInput>
    disconnect?: Enumerable<CareersWhereUniqueInput>
    delete?: Enumerable<CareersWhereUniqueInput>
    connect?: Enumerable<CareersWhereUniqueInput>
    update?: Enumerable<CareersUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<CareersUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<CareersScalarWhereInput>
  }

  export type PostsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostsCreateWithoutAuthorInput>, Enumerable<PostsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: Enumerable<PostsWhereUniqueInput>
    disconnect?: Enumerable<PostsWhereUniqueInput>
    delete?: Enumerable<PostsWhereUniqueInput>
    connect?: Enumerable<PostsWhereUniqueInput>
    update?: Enumerable<PostsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostsScalarWhereInput>
  }

  export type CommentsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutAuthorInput>, Enumerable<CommentsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentsCreateManyAuthorInputEnvelope
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    connect?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type CareersUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<Enumerable<CareersCreateWithoutEmployeeInput>, Enumerable<CareersUncheckedCreateWithoutEmployeeInput>>
    connectOrCreate?: Enumerable<CareersCreateOrConnectWithoutEmployeeInput>
    upsert?: Enumerable<CareersUpsertWithWhereUniqueWithoutEmployeeInput>
    createMany?: CareersCreateManyEmployeeInputEnvelope
    set?: Enumerable<CareersWhereUniqueInput>
    disconnect?: Enumerable<CareersWhereUniqueInput>
    delete?: Enumerable<CareersWhereUniqueInput>
    connect?: Enumerable<CareersWhereUniqueInput>
    update?: Enumerable<CareersUpdateWithWhereUniqueWithoutEmployeeInput>
    updateMany?: Enumerable<CareersUpdateManyWithWhereWithoutEmployeeInput>
    deleteMany?: Enumerable<CareersScalarWhereInput>
  }

  export type PostsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostsCreateWithoutAuthorInput>, Enumerable<PostsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: Enumerable<PostsWhereUniqueInput>
    disconnect?: Enumerable<PostsWhereUniqueInput>
    delete?: Enumerable<PostsWhereUniqueInput>
    connect?: Enumerable<PostsWhereUniqueInput>
    update?: Enumerable<PostsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostsScalarWhereInput>
  }

  export type CommentsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutAuthorInput>, Enumerable<CommentsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentsCreateManyAuthorInputEnvelope
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    connect?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type CareersCreateNestedOneWithoutCycleCareerInput = {
    create?: XOR<CareersCreateWithoutCycleCareerInput, CareersUncheckedCreateWithoutCycleCareerInput>
    connectOrCreate?: CareersCreateOrConnectWithoutCycleCareerInput
    connect?: CareersWhereUniqueInput
  }

  export type CareersUpdateOneRequiredWithoutCycleCareerNestedInput = {
    create?: XOR<CareersCreateWithoutCycleCareerInput, CareersUncheckedCreateWithoutCycleCareerInput>
    connectOrCreate?: CareersCreateOrConnectWithoutCycleCareerInput
    upsert?: CareersUpsertWithoutCycleCareerInput
    connect?: CareersWhereUniqueInput
    update?: XOR<CareersUpdateWithoutCycleCareerInput, CareersUncheckedUpdateWithoutCycleCareerInput>
  }

  export type CareersCreateNestedOneWithoutWalkCareerInput = {
    create?: XOR<CareersCreateWithoutWalkCareerInput, CareersUncheckedCreateWithoutWalkCareerInput>
    connectOrCreate?: CareersCreateOrConnectWithoutWalkCareerInput
    connect?: CareersWhereUniqueInput
  }

  export type CareersUpdateOneRequiredWithoutWalkCareerNestedInput = {
    create?: XOR<CareersCreateWithoutWalkCareerInput, CareersUncheckedCreateWithoutWalkCareerInput>
    connectOrCreate?: CareersCreateOrConnectWithoutWalkCareerInput
    upsert?: CareersUpsertWithoutWalkCareerInput
    connect?: CareersWhereUniqueInput
    update?: XOR<CareersUpdateWithoutWalkCareerInput, CareersUncheckedUpdateWithoutWalkCareerInput>
  }

  export type CareersCreateNestedOneWithoutRunCareerInput = {
    create?: XOR<CareersCreateWithoutRunCareerInput, CareersUncheckedCreateWithoutRunCareerInput>
    connectOrCreate?: CareersCreateOrConnectWithoutRunCareerInput
    connect?: CareersWhereUniqueInput
  }

  export type CareersUpdateOneRequiredWithoutRunCareerNestedInput = {
    create?: XOR<CareersCreateWithoutRunCareerInput, CareersUncheckedCreateWithoutRunCareerInput>
    connectOrCreate?: CareersCreateOrConnectWithoutRunCareerInput
    upsert?: CareersUpsertWithoutRunCareerInput
    connect?: CareersWhereUniqueInput
    update?: XOR<CareersUpdateWithoutRunCareerInput, CareersUncheckedUpdateWithoutRunCareerInput>
  }

  export type CycleCareerCreateNestedManyWithoutCareerInput = {
    create?: XOR<Enumerable<CycleCareerCreateWithoutCareerInput>, Enumerable<CycleCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<CycleCareerCreateOrConnectWithoutCareerInput>
    createMany?: CycleCareerCreateManyCareerInputEnvelope
    connect?: Enumerable<CycleCareerWhereUniqueInput>
  }

  export type WalkCareerCreateNestedManyWithoutCareerInput = {
    create?: XOR<Enumerable<WalkCareerCreateWithoutCareerInput>, Enumerable<WalkCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<WalkCareerCreateOrConnectWithoutCareerInput>
    createMany?: WalkCareerCreateManyCareerInputEnvelope
    connect?: Enumerable<WalkCareerWhereUniqueInput>
  }

  export type RunCareerCreateNestedManyWithoutCareerInput = {
    create?: XOR<Enumerable<RunCareerCreateWithoutCareerInput>, Enumerable<RunCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<RunCareerCreateOrConnectWithoutCareerInput>
    createMany?: RunCareerCreateManyCareerInputEnvelope
    connect?: Enumerable<RunCareerWhereUniqueInput>
  }

  export type EmployeeCreateNestedOneWithoutCareersInput = {
    create?: XOR<EmployeeCreateWithoutCareersInput, EmployeeUncheckedCreateWithoutCareersInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCareersInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CycleCareerUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<Enumerable<CycleCareerCreateWithoutCareerInput>, Enumerable<CycleCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<CycleCareerCreateOrConnectWithoutCareerInput>
    createMany?: CycleCareerCreateManyCareerInputEnvelope
    connect?: Enumerable<CycleCareerWhereUniqueInput>
  }

  export type WalkCareerUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<Enumerable<WalkCareerCreateWithoutCareerInput>, Enumerable<WalkCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<WalkCareerCreateOrConnectWithoutCareerInput>
    createMany?: WalkCareerCreateManyCareerInputEnvelope
    connect?: Enumerable<WalkCareerWhereUniqueInput>
  }

  export type RunCareerUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<Enumerable<RunCareerCreateWithoutCareerInput>, Enumerable<RunCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<RunCareerCreateOrConnectWithoutCareerInput>
    createMany?: RunCareerCreateManyCareerInputEnvelope
    connect?: Enumerable<RunCareerWhereUniqueInput>
  }

  export type CycleCareerUpdateManyWithoutCareerNestedInput = {
    create?: XOR<Enumerable<CycleCareerCreateWithoutCareerInput>, Enumerable<CycleCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<CycleCareerCreateOrConnectWithoutCareerInput>
    upsert?: Enumerable<CycleCareerUpsertWithWhereUniqueWithoutCareerInput>
    createMany?: CycleCareerCreateManyCareerInputEnvelope
    set?: Enumerable<CycleCareerWhereUniqueInput>
    disconnect?: Enumerable<CycleCareerWhereUniqueInput>
    delete?: Enumerable<CycleCareerWhereUniqueInput>
    connect?: Enumerable<CycleCareerWhereUniqueInput>
    update?: Enumerable<CycleCareerUpdateWithWhereUniqueWithoutCareerInput>
    updateMany?: Enumerable<CycleCareerUpdateManyWithWhereWithoutCareerInput>
    deleteMany?: Enumerable<CycleCareerScalarWhereInput>
  }

  export type WalkCareerUpdateManyWithoutCareerNestedInput = {
    create?: XOR<Enumerable<WalkCareerCreateWithoutCareerInput>, Enumerable<WalkCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<WalkCareerCreateOrConnectWithoutCareerInput>
    upsert?: Enumerable<WalkCareerUpsertWithWhereUniqueWithoutCareerInput>
    createMany?: WalkCareerCreateManyCareerInputEnvelope
    set?: Enumerable<WalkCareerWhereUniqueInput>
    disconnect?: Enumerable<WalkCareerWhereUniqueInput>
    delete?: Enumerable<WalkCareerWhereUniqueInput>
    connect?: Enumerable<WalkCareerWhereUniqueInput>
    update?: Enumerable<WalkCareerUpdateWithWhereUniqueWithoutCareerInput>
    updateMany?: Enumerable<WalkCareerUpdateManyWithWhereWithoutCareerInput>
    deleteMany?: Enumerable<WalkCareerScalarWhereInput>
  }

  export type RunCareerUpdateManyWithoutCareerNestedInput = {
    create?: XOR<Enumerable<RunCareerCreateWithoutCareerInput>, Enumerable<RunCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<RunCareerCreateOrConnectWithoutCareerInput>
    upsert?: Enumerable<RunCareerUpsertWithWhereUniqueWithoutCareerInput>
    createMany?: RunCareerCreateManyCareerInputEnvelope
    set?: Enumerable<RunCareerWhereUniqueInput>
    disconnect?: Enumerable<RunCareerWhereUniqueInput>
    delete?: Enumerable<RunCareerWhereUniqueInput>
    connect?: Enumerable<RunCareerWhereUniqueInput>
    update?: Enumerable<RunCareerUpdateWithWhereUniqueWithoutCareerInput>
    updateMany?: Enumerable<RunCareerUpdateManyWithWhereWithoutCareerInput>
    deleteMany?: Enumerable<RunCareerScalarWhereInput>
  }

  export type EmployeeUpdateOneRequiredWithoutCareersNestedInput = {
    create?: XOR<EmployeeCreateWithoutCareersInput, EmployeeUncheckedCreateWithoutCareersInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCareersInput
    upsert?: EmployeeUpsertWithoutCareersInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<EmployeeUpdateWithoutCareersInput, EmployeeUncheckedUpdateWithoutCareersInput>
  }

  export type CycleCareerUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<Enumerable<CycleCareerCreateWithoutCareerInput>, Enumerable<CycleCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<CycleCareerCreateOrConnectWithoutCareerInput>
    upsert?: Enumerable<CycleCareerUpsertWithWhereUniqueWithoutCareerInput>
    createMany?: CycleCareerCreateManyCareerInputEnvelope
    set?: Enumerable<CycleCareerWhereUniqueInput>
    disconnect?: Enumerable<CycleCareerWhereUniqueInput>
    delete?: Enumerable<CycleCareerWhereUniqueInput>
    connect?: Enumerable<CycleCareerWhereUniqueInput>
    update?: Enumerable<CycleCareerUpdateWithWhereUniqueWithoutCareerInput>
    updateMany?: Enumerable<CycleCareerUpdateManyWithWhereWithoutCareerInput>
    deleteMany?: Enumerable<CycleCareerScalarWhereInput>
  }

  export type WalkCareerUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<Enumerable<WalkCareerCreateWithoutCareerInput>, Enumerable<WalkCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<WalkCareerCreateOrConnectWithoutCareerInput>
    upsert?: Enumerable<WalkCareerUpsertWithWhereUniqueWithoutCareerInput>
    createMany?: WalkCareerCreateManyCareerInputEnvelope
    set?: Enumerable<WalkCareerWhereUniqueInput>
    disconnect?: Enumerable<WalkCareerWhereUniqueInput>
    delete?: Enumerable<WalkCareerWhereUniqueInput>
    connect?: Enumerable<WalkCareerWhereUniqueInput>
    update?: Enumerable<WalkCareerUpdateWithWhereUniqueWithoutCareerInput>
    updateMany?: Enumerable<WalkCareerUpdateManyWithWhereWithoutCareerInput>
    deleteMany?: Enumerable<WalkCareerScalarWhereInput>
  }

  export type RunCareerUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<Enumerable<RunCareerCreateWithoutCareerInput>, Enumerable<RunCareerUncheckedCreateWithoutCareerInput>>
    connectOrCreate?: Enumerable<RunCareerCreateOrConnectWithoutCareerInput>
    upsert?: Enumerable<RunCareerUpsertWithWhereUniqueWithoutCareerInput>
    createMany?: RunCareerCreateManyCareerInputEnvelope
    set?: Enumerable<RunCareerWhereUniqueInput>
    disconnect?: Enumerable<RunCareerWhereUniqueInput>
    delete?: Enumerable<RunCareerWhereUniqueInput>
    connect?: Enumerable<RunCareerWhereUniqueInput>
    update?: Enumerable<RunCareerUpdateWithWhereUniqueWithoutCareerInput>
    updateMany?: Enumerable<RunCareerUpdateManyWithWhereWithoutCareerInput>
    deleteMany?: Enumerable<RunCareerScalarWhereInput>
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutPostInput>, Enumerable<CommentsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutPostInput>
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type EmployeeCreateNestedOneWithoutPostInput = {
    create?: XOR<EmployeeCreateWithoutPostInput, EmployeeUncheckedCreateWithoutPostInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPostInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutPostInput>, Enumerable<CommentsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutPostInput>
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: Enumerable<CommentsWhereUniqueInput>
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutPostInput>, Enumerable<CommentsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    connect?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type EmployeeUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<EmployeeCreateWithoutPostInput, EmployeeUncheckedCreateWithoutPostInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPostInput
    upsert?: EmployeeUpsertWithoutPostInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<EmployeeUpdateWithoutPostInput, EmployeeUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<CommentsCreateWithoutPostInput>, Enumerable<CommentsUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<CommentsCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<CommentsUpsertWithWhereUniqueWithoutPostInput>
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: Enumerable<CommentsWhereUniqueInput>
    disconnect?: Enumerable<CommentsWhereUniqueInput>
    delete?: Enumerable<CommentsWhereUniqueInput>
    connect?: Enumerable<CommentsWhereUniqueInput>
    update?: Enumerable<CommentsUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<CommentsUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<CommentsScalarWhereInput>
  }

  export type PostsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    connect?: PostsWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutCommentsInput = {
    create?: XOR<EmployeeCreateWithoutCommentsInput, EmployeeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCommentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentsInput
    upsert?: PostsUpsertWithoutCommentsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutCommentsInput, EmployeeUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCommentsInput
    upsert?: EmployeeUpsertWithoutCommentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<EmployeeUpdateWithoutCommentsInput, EmployeeUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CareersCreateWithoutEmployeeInput = {
    id?: string
    cycleCareer?: CycleCareerCreateNestedManyWithoutCareerInput
    walkCareer?: WalkCareerCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerCreateNestedManyWithoutCareerInput
  }

  export type CareersUncheckedCreateWithoutEmployeeInput = {
    id?: string
    cycleCareer?: CycleCareerUncheckedCreateNestedManyWithoutCareerInput
    walkCareer?: WalkCareerUncheckedCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareersCreateOrConnectWithoutEmployeeInput = {
    where: CareersWhereUniqueInput
    create: XOR<CareersCreateWithoutEmployeeInput, CareersUncheckedCreateWithoutEmployeeInput>
  }

  export type CareersCreateManyEmployeeInputEnvelope = {
    data: Enumerable<CareersCreateManyEmployeeInput>
    skipDuplicates?: boolean
  }

  export type PostsCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    comments?: CommentsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    comments?: CommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostsCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutAuthorInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    post: PostsCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    postId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutAuthorInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutAuthorInput, CommentsUncheckedCreateWithoutAuthorInput>
  }

  export type CommentsCreateManyAuthorInputEnvelope = {
    data: Enumerable<CommentsCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type CareersUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: CareersWhereUniqueInput
    update: XOR<CareersUpdateWithoutEmployeeInput, CareersUncheckedUpdateWithoutEmployeeInput>
    create: XOR<CareersCreateWithoutEmployeeInput, CareersUncheckedCreateWithoutEmployeeInput>
  }

  export type CareersUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: CareersWhereUniqueInput
    data: XOR<CareersUpdateWithoutEmployeeInput, CareersUncheckedUpdateWithoutEmployeeInput>
  }

  export type CareersUpdateManyWithWhereWithoutEmployeeInput = {
    where: CareersScalarWhereInput
    data: XOR<CareersUpdateManyMutationInput, CareersUncheckedUpdateManyWithoutCareersInput>
  }

  export type CareersScalarWhereInput = {
    AND?: Enumerable<CareersScalarWhereInput>
    OR?: Enumerable<CareersScalarWhereInput>
    NOT?: Enumerable<CareersScalarWhereInput>
    id?: StringFilter | string
    employeeId?: StringFilter | string
  }

  export type PostsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
  }

  export type PostsUpdateManyWithWhereWithoutAuthorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostsScalarWhereInput = {
    AND?: Enumerable<PostsScalarWhereInput>
    OR?: Enumerable<PostsScalarWhereInput>
    NOT?: Enumerable<PostsScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    authorId?: StringFilter | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutAuthorInput, CommentsUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentsCreateWithoutAuthorInput, CommentsUncheckedCreateWithoutAuthorInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutAuthorInput, CommentsUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentsUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: Enumerable<CommentsScalarWhereInput>
    OR?: Enumerable<CommentsScalarWhereInput>
    NOT?: Enumerable<CommentsScalarWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    postId?: StringFilter | string
    authorId?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type CareersCreateWithoutCycleCareerInput = {
    id?: string
    walkCareer?: WalkCareerCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerCreateNestedManyWithoutCareerInput
    employee: EmployeeCreateNestedOneWithoutCareersInput
  }

  export type CareersUncheckedCreateWithoutCycleCareerInput = {
    id?: string
    employeeId: string
    walkCareer?: WalkCareerUncheckedCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareersCreateOrConnectWithoutCycleCareerInput = {
    where: CareersWhereUniqueInput
    create: XOR<CareersCreateWithoutCycleCareerInput, CareersUncheckedCreateWithoutCycleCareerInput>
  }

  export type CareersUpsertWithoutCycleCareerInput = {
    update: XOR<CareersUpdateWithoutCycleCareerInput, CareersUncheckedUpdateWithoutCycleCareerInput>
    create: XOR<CareersCreateWithoutCycleCareerInput, CareersUncheckedCreateWithoutCycleCareerInput>
  }

  export type CareersUpdateWithoutCycleCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    walkCareer?: WalkCareerUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUpdateManyWithoutCareerNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareersUncheckedUpdateWithoutCycleCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    walkCareer?: WalkCareerUncheckedUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareersCreateWithoutWalkCareerInput = {
    id?: string
    cycleCareer?: CycleCareerCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerCreateNestedManyWithoutCareerInput
    employee: EmployeeCreateNestedOneWithoutCareersInput
  }

  export type CareersUncheckedCreateWithoutWalkCareerInput = {
    id?: string
    employeeId: string
    cycleCareer?: CycleCareerUncheckedCreateNestedManyWithoutCareerInput
    runCareer?: RunCareerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareersCreateOrConnectWithoutWalkCareerInput = {
    where: CareersWhereUniqueInput
    create: XOR<CareersCreateWithoutWalkCareerInput, CareersUncheckedCreateWithoutWalkCareerInput>
  }

  export type CareersUpsertWithoutWalkCareerInput = {
    update: XOR<CareersUpdateWithoutWalkCareerInput, CareersUncheckedUpdateWithoutWalkCareerInput>
    create: XOR<CareersCreateWithoutWalkCareerInput, CareersUncheckedCreateWithoutWalkCareerInput>
  }

  export type CareersUpdateWithoutWalkCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUpdateManyWithoutCareerNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareersUncheckedUpdateWithoutWalkCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUncheckedUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareersCreateWithoutRunCareerInput = {
    id?: string
    cycleCareer?: CycleCareerCreateNestedManyWithoutCareerInput
    walkCareer?: WalkCareerCreateNestedManyWithoutCareerInput
    employee: EmployeeCreateNestedOneWithoutCareersInput
  }

  export type CareersUncheckedCreateWithoutRunCareerInput = {
    id?: string
    employeeId: string
    cycleCareer?: CycleCareerUncheckedCreateNestedManyWithoutCareerInput
    walkCareer?: WalkCareerUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareersCreateOrConnectWithoutRunCareerInput = {
    where: CareersWhereUniqueInput
    create: XOR<CareersCreateWithoutRunCareerInput, CareersUncheckedCreateWithoutRunCareerInput>
  }

  export type CareersUpsertWithoutRunCareerInput = {
    update: XOR<CareersUpdateWithoutRunCareerInput, CareersUncheckedUpdateWithoutRunCareerInput>
    create: XOR<CareersCreateWithoutRunCareerInput, CareersUncheckedCreateWithoutRunCareerInput>
  }

  export type CareersUpdateWithoutRunCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUpdateManyWithoutCareerNestedInput
    walkCareer?: WalkCareerUpdateManyWithoutCareerNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutCareersNestedInput
  }

  export type CareersUncheckedUpdateWithoutRunCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUncheckedUpdateManyWithoutCareerNestedInput
    walkCareer?: WalkCareerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CycleCareerCreateWithoutCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CycleCareerUncheckedCreateWithoutCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CycleCareerCreateOrConnectWithoutCareerInput = {
    where: CycleCareerWhereUniqueInput
    create: XOR<CycleCareerCreateWithoutCareerInput, CycleCareerUncheckedCreateWithoutCareerInput>
  }

  export type CycleCareerCreateManyCareerInputEnvelope = {
    data: Enumerable<CycleCareerCreateManyCareerInput>
    skipDuplicates?: boolean
  }

  export type WalkCareerCreateWithoutCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WalkCareerUncheckedCreateWithoutCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WalkCareerCreateOrConnectWithoutCareerInput = {
    where: WalkCareerWhereUniqueInput
    create: XOR<WalkCareerCreateWithoutCareerInput, WalkCareerUncheckedCreateWithoutCareerInput>
  }

  export type WalkCareerCreateManyCareerInputEnvelope = {
    data: Enumerable<WalkCareerCreateManyCareerInput>
    skipDuplicates?: boolean
  }

  export type RunCareerCreateWithoutCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RunCareerUncheckedCreateWithoutCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RunCareerCreateOrConnectWithoutCareerInput = {
    where: RunCareerWhereUniqueInput
    create: XOR<RunCareerCreateWithoutCareerInput, RunCareerUncheckedCreateWithoutCareerInput>
  }

  export type RunCareerCreateManyCareerInputEnvelope = {
    data: Enumerable<RunCareerCreateManyCareerInput>
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutCareersInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    post?: PostsCreateNestedManyWithoutAuthorInput
    comments?: CommentsCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutCareersInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    post?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutCareersInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCareersInput, EmployeeUncheckedCreateWithoutCareersInput>
  }

  export type CycleCareerUpsertWithWhereUniqueWithoutCareerInput = {
    where: CycleCareerWhereUniqueInput
    update: XOR<CycleCareerUpdateWithoutCareerInput, CycleCareerUncheckedUpdateWithoutCareerInput>
    create: XOR<CycleCareerCreateWithoutCareerInput, CycleCareerUncheckedCreateWithoutCareerInput>
  }

  export type CycleCareerUpdateWithWhereUniqueWithoutCareerInput = {
    where: CycleCareerWhereUniqueInput
    data: XOR<CycleCareerUpdateWithoutCareerInput, CycleCareerUncheckedUpdateWithoutCareerInput>
  }

  export type CycleCareerUpdateManyWithWhereWithoutCareerInput = {
    where: CycleCareerScalarWhereInput
    data: XOR<CycleCareerUpdateManyMutationInput, CycleCareerUncheckedUpdateManyWithoutCycleCareerInput>
  }

  export type CycleCareerScalarWhereInput = {
    AND?: Enumerable<CycleCareerScalarWhereInput>
    OR?: Enumerable<CycleCareerScalarWhereInput>
    NOT?: Enumerable<CycleCareerScalarWhereInput>
    id?: StringFilter | string
    points?: IntFilter | number
    currentMonth?: DateTimeFilter | Date | string
    kilometers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careersId?: StringFilter | string
  }

  export type WalkCareerUpsertWithWhereUniqueWithoutCareerInput = {
    where: WalkCareerWhereUniqueInput
    update: XOR<WalkCareerUpdateWithoutCareerInput, WalkCareerUncheckedUpdateWithoutCareerInput>
    create: XOR<WalkCareerCreateWithoutCareerInput, WalkCareerUncheckedCreateWithoutCareerInput>
  }

  export type WalkCareerUpdateWithWhereUniqueWithoutCareerInput = {
    where: WalkCareerWhereUniqueInput
    data: XOR<WalkCareerUpdateWithoutCareerInput, WalkCareerUncheckedUpdateWithoutCareerInput>
  }

  export type WalkCareerUpdateManyWithWhereWithoutCareerInput = {
    where: WalkCareerScalarWhereInput
    data: XOR<WalkCareerUpdateManyMutationInput, WalkCareerUncheckedUpdateManyWithoutWalkCareerInput>
  }

  export type WalkCareerScalarWhereInput = {
    AND?: Enumerable<WalkCareerScalarWhereInput>
    OR?: Enumerable<WalkCareerScalarWhereInput>
    NOT?: Enumerable<WalkCareerScalarWhereInput>
    id?: StringFilter | string
    points?: IntFilter | number
    currentMonth?: DateTimeFilter | Date | string
    kilometers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careersId?: StringFilter | string
  }

  export type RunCareerUpsertWithWhereUniqueWithoutCareerInput = {
    where: RunCareerWhereUniqueInput
    update: XOR<RunCareerUpdateWithoutCareerInput, RunCareerUncheckedUpdateWithoutCareerInput>
    create: XOR<RunCareerCreateWithoutCareerInput, RunCareerUncheckedCreateWithoutCareerInput>
  }

  export type RunCareerUpdateWithWhereUniqueWithoutCareerInput = {
    where: RunCareerWhereUniqueInput
    data: XOR<RunCareerUpdateWithoutCareerInput, RunCareerUncheckedUpdateWithoutCareerInput>
  }

  export type RunCareerUpdateManyWithWhereWithoutCareerInput = {
    where: RunCareerScalarWhereInput
    data: XOR<RunCareerUpdateManyMutationInput, RunCareerUncheckedUpdateManyWithoutRunCareerInput>
  }

  export type RunCareerScalarWhereInput = {
    AND?: Enumerable<RunCareerScalarWhereInput>
    OR?: Enumerable<RunCareerScalarWhereInput>
    NOT?: Enumerable<RunCareerScalarWhereInput>
    id?: StringFilter | string
    points?: IntFilter | number
    currentMonth?: DateTimeFilter | Date | string
    kilometers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    careersId?: StringFilter | string
  }

  export type EmployeeUpsertWithoutCareersInput = {
    update: XOR<EmployeeUpdateWithoutCareersInput, EmployeeUncheckedUpdateWithoutCareersInput>
    create: XOR<EmployeeCreateWithoutCareersInput, EmployeeUncheckedCreateWithoutCareersInput>
  }

  export type EmployeeUpdateWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentsCreateWithoutPostInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    author: EmployeeCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    authorId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: Enumerable<CommentsCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutPostInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    careers?: CareersCreateNestedManyWithoutEmployeeInput
    comments?: CommentsCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutPostInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    careers?: CareersUncheckedCreateNestedManyWithoutEmployeeInput
    comments?: CommentsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutPostInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPostInput, EmployeeUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type EmployeeUpsertWithoutPostInput = {
    update: XOR<EmployeeUpdateWithoutPostInput, EmployeeUncheckedUpdateWithoutPostInput>
    create: XOR<EmployeeCreateWithoutPostInput, EmployeeUncheckedCreateWithoutPostInput>
  }

  export type EmployeeUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareersUpdateManyWithoutEmployeeNestedInput
    comments?: CommentsUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareersUncheckedUpdateManyWithoutEmployeeNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostsCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    author: EmployeeCreateNestedOneWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    authorId: string
  }

  export type PostsCreateOrConnectWithoutCommentsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
  }

  export type EmployeeCreateWithoutCommentsInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    careers?: CareersCreateNestedManyWithoutEmployeeInput
    post?: PostsCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeUncheckedCreateWithoutCommentsInput = {
    id?: string
    fullName: string
    dni: number
    username: string
    phone: string
    password: string
    role?: Role
    createAt?: Date | string
    updateAt?: Date | string
    careers?: CareersUncheckedCreateNestedManyWithoutEmployeeInput
    post?: PostsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type EmployeeCreateOrConnectWithoutCommentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCommentsInput, EmployeeUncheckedCreateWithoutCommentsInput>
  }

  export type PostsUpsertWithoutCommentsInput = {
    update: XOR<PostsUpdateWithoutCommentsInput, PostsUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostsCreateWithoutCommentsInput, PostsUncheckedCreateWithoutCommentsInput>
  }

  export type PostsUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: EmployeeUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUpsertWithoutCommentsInput = {
    update: XOR<EmployeeUpdateWithoutCommentsInput, EmployeeUncheckedUpdateWithoutCommentsInput>
    create: XOR<EmployeeCreateWithoutCommentsInput, EmployeeUncheckedCreateWithoutCommentsInput>
  }

  export type EmployeeUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareersUpdateManyWithoutEmployeeNestedInput
    post?: PostsUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    dni?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careers?: CareersUncheckedUpdateManyWithoutEmployeeNestedInput
    post?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CareersCreateManyEmployeeInput = {
    id?: string
  }

  export type PostsCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
  }

  export type CommentsCreateManyAuthorInput = {
    id?: string
    content: string
    postId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CareersUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUpdateManyWithoutCareerNestedInput
    walkCareer?: WalkCareerUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUpdateManyWithoutCareerNestedInput
  }

  export type CareersUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleCareer?: CycleCareerUncheckedUpdateManyWithoutCareerNestedInput
    walkCareer?: WalkCareerUncheckedUpdateManyWithoutCareerNestedInput
    runCareer?: RunCareerUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareersUncheckedUpdateManyWithoutCareersInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PostsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    comments?: CommentsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    comments?: CommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCareerCreateManyCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WalkCareerCreateManyCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RunCareerCreateManyCareerInput = {
    id?: string
    points: number
    currentMonth: Date | string
    kilometers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CycleCareerUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCareerUncheckedUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCareerUncheckedUpdateManyWithoutCycleCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalkCareerUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalkCareerUncheckedUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalkCareerUncheckedUpdateManyWithoutWalkCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCareerUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCareerUncheckedUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RunCareerUncheckedUpdateManyWithoutRunCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    currentMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    kilometers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyPostInput = {
    id?: string
    content: string
    authorId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: EmployeeUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}