let navItems = {
    'Home' : 'index.html',
    'About' : 'about.html',
    'Projects' : 'projects.html',
    'Previous Work' : 'previous.html',
    'Contact' : 'contact.html'
}

$(document).ready(() => {
    let bar = $('<ul>');
    Object.keys(navItems).forEach(key => {
        console.log(key)
        bar.append(
            $('<li>')
                .css({
                    display: 'inline',
                    padding: '25px',
                    marginRight: '100px'
                })
                .append(
                    $('<a>')
                        .attr({
                            href:navItems[key]
                        })
                        .text(key)
                        
                )
            )
    });
    $('#nav').append(bar)
})