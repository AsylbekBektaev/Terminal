class Helper {
    static format(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}