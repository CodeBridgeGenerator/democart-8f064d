
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
email: faker.internet.email(""),
username: faker.internet.username(""),
password: faker.internet.password(""),
is_active: faker.datatype.boolean(""),
points: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
