var lib = require("./library.js");

class View {
    
    constructor(viewRenderer, viewId, parentNode="app", numTemplates, dataKey) {
        this._viewId = viewId;
        this._parentNode = parentNode;

        this._viewRenderer = viewRenderer;
        this._numTemplates = numTemplates;
        this._dataKey = dataKey;
        
        this._childViews = [];
        this._content = null;
    }

    get Id() {
        return this.viewId;
    }

    get parentNode() {
        return this.parentNode;
    }
    
    get childViews() {
        return this._childViews;
    }

    set parentNode(node) {
        this._parentNode = node;
    } 

    addChildView(view) {
        this._childViews.push(view);
    }

    removeView() {
        if (typeof(this._parentNode) == "string") {
            this._parentNode = document.getElementById(this._parentNode);
        }

        this._parentNode.innerHTML = "";
    }

    renderView() {
        if (typeof(this._parentNode) == "string") {
            this._parentNode = document.getElementById(this._parentNode);
        }

        if (this._numTemplates == undefined) this._numTemplates = 1;

        if (this._content == null) {
            for (var i = 0; i < this._numTemplates; i++) {
                this._content = this._viewRenderer.getViewContent(this._viewId, this._dataKey,i);
                lib.append(this._parentNode, this._content);
            }
        }

        for (var i=0; i < this._childViews.length; i++) {
            this._childViews[i].renderView();
        }
    } 
}

module.exports = View;