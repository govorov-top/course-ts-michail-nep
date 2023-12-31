/** Asserts **/
type User = {
    name: string,
    displayName: string | null
};

function assertDisplayName(user: User) : asserts user is User & {displayName: string } {
    if (!user.displayName) throw new Error('User has not displayName field');
}

function logUserByDisplayName(user: User) : void {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}