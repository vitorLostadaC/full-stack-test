/**
 * @example
 * type DateCreator = { createdAt: Date }
 * type DateCreatorWithOptionalValue = Replace<DateCreator, { createdAt?: Date }>
 *
 * Result:
 * type DateCreator = { createdAt: Date }
 * type DateCreatorWithOptionalValue = { createdAt?: Date }
 */
export type Replace<T, R> = Omit<T, keyof R> & R
