let timelineData = {
    0: {
        title: '2019-2020',
        text: 'My final position at HP was in printhead health and servicing. I was working on the newest generation of deskjets, using all-new thermal inkjet technology. I was responsible for the interior maintaince-ink storage and control, parts that funnel the excess ink that printers jet while cleaning and preparing to print so that ink does not spill out of the printer. I was also in charge of the servo system the printer used to wipe the ink cartriges.',
        url: 'media/right_facing.png',
    },
    1: {
        title: '2018',
        text: 'I worked on a special project within the Vancouver R&D lab to attempt to improve the print experience with modern voice assistants. This was a collaboration between designers, UX specialists, and engineers to explore how print and voice can go together. We ideated many new concepts and studied the ways people want to interact with their devices.',
        url: 'media/voiceprinter.jpg',
    },
    2: {
        title: '2013-2017',
        text: 'My first four years at HP, I worked in their office print lab developing the Pagewide Pro. This was an ambitions printer which brought inkjet technology to the office. I worked in drive systems, designing and analyzing servo driven paper handling systems. I was responsible for ~30 injection molded plastic parts.',
        url: 'media/pagewide.png',
    },
    3: {
        title: '2013',
        text: 'My undergraduate capstone project was a plastic filament extruder to create filament for 3D printers using recycled plastic. We used a large stepper motor with gear reduction to turn a ship auger in a heated cylinder which melted the plastic and forced it through an opening. In addition to designing the drive mechanism, I also wrote the software to control filament feed and measure for quality checks.',
        url: 'media/extruder.jpg',
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
                        width: 'auto',
                        height: '300px'
                    })
                ).attr({class: 'timePhoto'})
                .css({gridRow: row,
                    paddingLeft: '25px'})
            ).attr({
                class: 'timelineItem'
            })
            ++row;
    })
    $('#line').css({
        gridRowStart:'1',
        gridRowEnd: row,
        gridColumn: '1',
        width: '100%',
        height: '100%'
    })
    console.log('timeline entries: ' + (row-1))
})