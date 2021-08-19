let timelineData = {
    0: {
        title: 'sample',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis nisi in',
        url: 'https://placekitten.com/g/300/300',
    },
    1: {
        title: 'sample2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis nisi in',
        url: 'https://placekitten.com/g/300/300',
    }
}

$(document).ready(() => {
    let row=1;
    $('#timeline').css({
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 3fr 3fr',
        gridTemplateRows:'repeat(400px)',
        gap: '10px'
    })
    Object.keys(timelineData).forEach((key) => {
        $('#timeline')
            .append(
                $('<div>').text(timelineData[key].title)
                    .attr({class: 'timeTitle'})
                    .css({gridRow: row})
            ).append(
                $('<div>').text(timelineData[key].text)
                .attr({class: 'timeBody'})
                .css({gridRow: row})
            ).append(
                $('<div>').append(
                    $('<img>').attr({
                        src: timelineData[key].url,
                        width: '300px',
                        height: '300px'
                    })
                ).attr({class: 'timePhoto'})
                .css({gridRow: row})
            ).attr({
                class: 'timelineItem'
            })
            ++row;
    })
    $('#line').css({
        gridRow: '1/-1',
        gridColumn: '1',
        width: '100%',
        height: '100%'
    })
    console.log('timeline entries: ' + (row-1))
})