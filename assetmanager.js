class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {               // path is a string, depicting the path of the image. path is to identify the image in asset manager. 
        console.log("Queueing " + path);
        this.downloadQueue.push(path);  // push the path into the queues
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10); //if theres nothing in the queue just call callback, delays 10ms for the html to load.
        for (let i = 0; i < this.downloadQueue.length; i++) {
            const img = new Image(); //creates the image tag. empty image waiting for somthing to download

            const path = this.downloadQueue[i];
            console.log(path);

            img.addEventListener("load", () => {
                console.log("Loaded " + img.src);
                this.successCount++;
                if (this.isDone()) callback();
            });

            img.addEventListener("error", () => {
                console.log("Error loading " + img.src);
                this.errorCount++;
                if (this.isDone()) callback();
            });

            img.src = path;
            this.cache[path] = img;
        }
    };

    getAsset(path) {
        return this.cache[path];
    };
};

