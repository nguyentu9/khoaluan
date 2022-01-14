export const isValidPhone = (phone) =>
    /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g.test(
        phone
    );

export const list = (arr) =>
    arr?.map((e) => ({ key: e.id, text: e.name, value: e.id }));
