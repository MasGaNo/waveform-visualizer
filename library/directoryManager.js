// nodejs fs
var fs = require('fs');

/**
 * 
 * @returns {directoryManagerConstructor}
 */
var directoryManager = function directoryManagerConstructor() {
    
};

/**
 * 
 * @param {type} directory
 * @param {type} callback
 * @returns {undefined}
 */
directoryManager.prototype.exists = function directoryExistsFunction(directory, callback) {
    
    console.log('directoryExists: ' + directory);
    
    if (callback !== undefined) {
    
        // async exists
        fs.exists(directory, function(exists) {

            callback(false, exists);

        });
        
    } else {
        
        fs.existsSync(directory);
        
    }
    
};

/**
 * 
 * @param {type} directory
 * @param {type} callback
 * @returns {undefined}
 */
directoryManager.prototype.create = function createDirectoryFunction(directory, callback) {
    
    console.log('createDirectory: ' + directory);
    
    if (callback !== undefined) {
    
        fs.mkdir(directory, 0666, function(error) {

            if (!error) {

                callback(false);

            } else {

                callback(error);

            }

        });
        
    } else {
        
        fs.mkdirSync(directory, 0666);
        
    }
    
};

module.exports.directoryManager = directoryManager;