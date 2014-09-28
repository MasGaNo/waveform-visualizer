/**
 * 
 * events manager
 * simplified events manager based on backbone.events
 * extends this to add your own events manager
 * 
 * @returns {unresolved}
 */
define([

], function (

) {

    'use strict';
    
    var events = {};
    
    /**
     * 
     * events manager constructor
     * 
     * @returns {event_L9.eventsManager}
     */
    var eventsManager = function eventsManagerFunction() {
        
        this.events = events;
        
    };
    
    /**
     * 
     * on
     * 
     * @param {type} name
     * @param {type} callback
     * @param {type} context
     * @returns {undefined}
     */
    eventsManager.prototype.on = function onFunction(name, callback, context) {
        
        var eventsList;
        
        if (!(name in this.events)) {
        
            this.events[name] = [];
            
        }
        
        eventsList = this.events[name];
        
        if (context === undefined) {
            
            context = this;
            
        }
        
        eventsList.push({
            callback: callback,
            context: context
        });
        
        return this;
        
    };
    
    /**
     * 
     * off
     * 
     * @param {type} name
     * @returns {undefined}
     */
    eventsManager.prototype.off = function onFunction(name) {
        
        if (name in this.events) {
            
            delete this.events[name];
            
        }

        return this;
        
    };
    
    /**
     * 
     * once
     * 
     * @param {type} name
     * @param {type} callback
     * @param {type} context
     * @returns {undefined}
     */
    eventsManager.prototype.once = function onFunction(name, callback, context) {

        var onceCallback = function() {
            
            callback.apply(this, arguments);
            
            this.off(name);
            
        };
        
        this.on(name, onceCallback, context);
        
    };
    
    /**
     * 
     * trigger
     * 
     * @param {type} name
     * @returns {undefined}
     */
    eventsManager.prototype.trigger = function triggerFunction(name) {
        
        var args = Array.prototype.slice.call(arguments, 1);
        
        var eventsList = this.events[name];
        var eventsListLength = eventsList.length;
        var i;
      
        for (i = 0; i < eventsListLength; i++) {
        
            var callback = eventsList[i].callback;
            var context = eventsList[i].context;
        
            callback.apply(context, args);
            
        }
        
        return this;
        
    };
    
    /**
     * public functions
     */
    return eventsManager;

});