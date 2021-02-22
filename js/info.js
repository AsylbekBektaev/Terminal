class Info {
    static countInfo() {
        this.countsInfo++;

        this._change();
    }

    static countWrapper() {
        this.countsWrapper++;

        this._change();
    }

    static _change() {
        console.dir(this);

        if (this.countsInfo === 6 && this.countsWrapper === 4) {
            window.location = '/pages/collection.php';
        }
    }
}

Info.countsInfo = 0;
Info.countsWrapper = 0;
