var FileService = {

    checkIfFileExists: function(file){

        var def = Q.defer();

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
            fileSystem.root.getFile(file, { create: false }, fileExists, fileDoesNotExist);
        }, getFSFail);

        var fileExists = function(){
            def.resolve();
        }

        var fileDoesNotExist = function(){
            def.reject();
        }

        var getFSFail = function(error){
            console.error(error);
            def.reject();
        }

        return def.promise;

    },

    createFile: function(file){

        var def = Q.defer();

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

            fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

                def.resolve();

            }, function(error){
               console.error(error);
               def.reject();
           });

        }, function(error){
            console.error(error);
            def.reject();
        });

        return def.promise;

    },

    readFile: function(file){

        def = Q.defer();

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
            fs.root.getFile(file, { create: true, exclusive: false }, function (fileEntry) {

                fileEntry.file(function (file) {
                    var reader = new FileReader();

                    reader.onloadend = function() {
                        def.resolve(this.result);
                    };

                    reader.readAsText(file);

                },function(error){
                    console.error(error);
                    def.reject();
                });

            });

        });

        return def.promise;

    },

    overwriteFile: function(file,text){

        var def = Q.defer();

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

            fs.root.getFile(file, { create: true, exclusive: false }, function (fileEntry) {

                fileEntry.createWriter(function (fileWriter) {

                    fileWriter.onwriteend = function() {
                        def.resolve();
                    };

                    fileWriter.onerror = function (e) {
                        console.error(e);
                        def.reject();
                    };

                    var dataObj = new Blob([text], { type: 'text/plain' });

                    fileWriter.write(dataObj);

                });

            });

        });

        return def.promise;

    }

}