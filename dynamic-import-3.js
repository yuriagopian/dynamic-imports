let tnsContainer = document.getElementById(selectors.tnsId);
if(tnsContainer) {
    /* Dynamic Import */
    import(
    `tiny-slider/src/tiny-slider`
    ).then(function({ tns }) {
        if (tns) {
            tns({
                container: selectors.tnsId,
                items: 3,
                slideBy: 3,
                controlsContainer: selectors.tnsCntrlsId,
                autoplay: true,
                autoplayTimeout: 3000,
                navPosition: 'bottom',
            });
        }
    })
    .catch(
        function(error) {
           console.error(error);
        }
    );
}