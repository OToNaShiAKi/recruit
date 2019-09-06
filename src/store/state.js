export default {
    snack: {
        show: false,
        color: "error",
        text: "网络连接失败"
    },
    name: window.localStorage.getItem("name") || "",
    uid: window.localStorage.getItem("uid") || "",
    depart: [],
    dialog: false
}