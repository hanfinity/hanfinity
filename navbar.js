let navItems = {
    'Home' : 'index.html',
    'About' : 'about.html',
    'Projects' : 'projects.html',
    'Experience' : 'previous.html',
    'Contact' : 'contact.html'
}

$(document).ready(() => {
    let bar = $('<ul>');
    Object.keys(navItems).forEach(key => {
        console.log(key)
        bar.append(
            $('<li>')
                .attr({
                    class: 'navbutton'
                })
                .css({
                    display: 'inline',
                    marginRight: '25px'
                })
                .append(
                    $('<a>')
                        .attr({
                            href:navItems[key]
                        })
                        .text(key)
                        
                )
            )
        bar.attr({class: 'navBar'});
    });
    $('#nav').append(bar)
})