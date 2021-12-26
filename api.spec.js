const { getUsers, registerUser } = require("./api")

describe('function getUsers()', ()=> {
    it('should return all users with page 1', async ()=> {
        const response = await getUsers({page: 1});
        expect(response.data).toBeInstanceOf(Array)
        expect(response.page).toBe(1)
    });

    it('should return empty array with page 100', async () => {
        const response = await getUsers({page: 100});
        expect(response.page).toBe(100)
        expect(response.data).toStrictEqual([])
    })
})


describe('function registerUser()', () => {
    it('should return success with the inputed email and password when register new user', async ()=> {
        const email = "george.bluth@reqres.in";
        const password = "George Bluth";
        const response = await registerUser({email, password});
        expect(response.id).not.toBe(null)
        expect(response.token).not.toBe(null);
    });

    it('should return error when input is empty', async ()=> { 
        try {    
            await registerUser();
        } catch (err) {
            expect(err.response.status).toBe(400)
            expect(err.response.data.error).toBe('Missing email or username')
        }
    });

    it('should return error when inputed email or password is not registered', async ()=> { 
        try {  
            const email = "testing@gmail.com";
            const password = "testing gmail";
            await registerUser({email, password});
        } catch (err) {
            expect(err.response.status).toBe(400)
            expect(err.response.data.error).toBe('Note: Only defined users succeed registration')
        }
    });
})