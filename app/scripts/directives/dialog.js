'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button
app.directive("addDirective",function(){
	return {
		restrict:'A',
		replace:true,
		template:'\
    <div>\
    <button class="btn btn-danger" data-toggle="modal" data-target="#add_modal">Add Item</button>\
		<div id="add_modal" role="dialog" tabindex="-1" class="modal fade" aria-labelledby="titlelabel" aria-hidden="true">\
            <div class="modal-dialog">\
                <div class="modal-content" id="window_content">\
                   <h1 class="modal-title" id="titlelabel">Add Item</h1>\
                   <input type="text" ng-model="tile_title" class="form-control" placeholder="Title">\
                   <input type="text" ng-model="tile_author" class="form-control" placeholder="Author">\
                   <input type="text" ng-model="tile_like" class="form-control" placeholder="Like">\
                   <input type="text" ng-model="tile_comment" class="form-control" placeholder="Comment">\
                    <button type="button" class="btn btn-success" ng-click="submitForm()" ng-disabled="!tile_title||!tile_author||!tile_like||!tile_comment">Submit</button>\
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\
                </div>\
            </div>\
        </div>\
        </div>\
        '
	}
});