export default {
    already: (state, infor) => {
        for (let key in infor) {
            state[key] = infor[key];
            window.localStorage.setItem(key, infor[key]);
        }
    },
    snack: (state, snack) => {
        state.snack.show = true;
        state.snack.to = "";
        for (let key in snack)
            state.snack[key] = snack[key];
    },
    inquiry: (state, inquiry) => {
        state.dialog = true;
        state.depart = inquiry;
    },
    dialog: (state, show) => {
        state.dialog = show;
    },
    depart: (state, depart) => {
        depart = depart.map(v => ({
            name: v,
            status: "未面试"
        }));
        state.depart.push(...depart);
    }
}