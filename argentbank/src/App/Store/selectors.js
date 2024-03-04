
// Token
export const selectUserToken = (state) => state?.user?.token

// Profile

export const selectUserProfileId = (state) => state?.account?.userProfile?.id

export const selectUserName = (state) => state?.account?.userProfile?.userName

export const selectFirstName = (state) => state?.account?.userProfile?.firstName

export const selectLastName = (state) => state?.account?.userProfile?.lastName

// Account

export const selectUserAccount = (state) => state?.account?.userAccount?.accounts

