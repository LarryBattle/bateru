/**
 * Folder - Create a basic file storage object.
 *
 * @author Larry Battle
 * @version 0.1
 */
var Folder = function () {
  this.files = {};
};
Folder.prototype.getFile = function (fileId) {
	return this.files[fileId];
};
Folder.prototype.addFile = function (file, indexBy) {
	indexBy = indexBy || "id";
	this.files[file[indexBy]] = file;
	if (indexBy !== "id") {
		this.files[file[indexBy]].id = file[indexBy];
	}
};
Folder.prototype.addFiles = function (files, indexBy) {
	if (typeof files !== "object" || !files.length) {
		return;
	}
	var i,
	len;
	for (i = 0, len = files.length; i < len; i++) {
		this.addFile(files[i], indexBy);
	}
};
Folder.prototype.removeFile = function (fileId) {
	delete this.files[fileId];
};
Folder.prototype.updateFile = function (fileId, props) {
	var obj = this.getFile(fileId),
	prop;
	if (!obj || typeof props !== "object") {
		return;
	}
	for (prop in props) {
		if (props.hasOwnProperty(prop)) {
			obj[prop] = props[prop];
		}
	}
};
Folder.prototype.clear = function () {
	this.files = {};
};
Folder.prototype.forEachFile = function (callback) {
	if (typeof callback !== "function") {
		return;
	}
	var fileId;
	for (fileId in this.files) {
		if (this.files.hasOwnProperty(fileId)) {
			callback(this.files[fileId], fileId);
		}
	}
};
Folder.prototype.getPropFromAllFiles = function (prop) {
	var arr = [];
	this.forEachFile(function (file, fileId) {
		arr.push(prop ? file[prop] : fileId);
	});
	return arr;
};
Folder.extend = function (obj) {
	// Taken from http://upshots.org/javascript/really-simple-javascript-inheritance
	var SubClass = function (sup, sub) {
		sub.prototype = new sup();
		sub.prototype._super = sub.prototype.constructor;
		sub.prototype.constructor = sub;
		return sub;
	};
	return SubClass(Folder, obj);
};
