/*===== DRAG and DROP =====*/
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    store: {
    	// We keep the order of the list
    	set: (sortable) =>{
    		const order = sortable.toArray()
    		localStorage.setItem(sortable.options.group.name, order.join('|'))
    	},

    	// We get the order of the list
    	get: (sortable) =>{
    		const order = localStorage.getItem(sortable.options.group.name)
    		return order ? order.split('|') : []
    	}
    }
});
