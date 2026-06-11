
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.commerce.productName(""),
points: faker.datatype.number(""),
image: faker.image.imageUrl(""),
description: faker.lorem.paragraph(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
