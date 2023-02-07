<template>
    <div>
        <div style="height: 600px">
            <PinturaEditor
                v-bind="editorDefaults"
                :src="src"
                :imageCropAspectRatio="imageCropAspectRatio"
            ></PinturaEditor>
        </div>
    </div>
</template>
<script>
    // Import the editor default configuration
    import { getEditorDefaults } from '@pqina/pintura';

    // Import the component from `vue-pintura`
    // When using Vue 2 import from @pqina/vue-pintura/vue-2 instead
    import { PinturaEditor } from '@pqina/vue-pintura/vue-2';

    export default {
        name: 'App',
        components: {
            PinturaEditor,
        },
        data() {
            return {
                // Pass the editor default configuration options
                editorDefaults: getEditorDefaults(),

                // The source image to load
                src: require('../assets/icons/0002.jpg'),


                // This will set a square crop aspect ratio
                imageCropAspectRatio: 1,
            };
        },
    };
</script>
<style>
    @import '../../node_modules/@pqina/pintura/pintura.css';
    /* @import './node_modules/@pqina/pintura/pintura.css'; */

    
     @import '../../local_modules/pintura/pintura.css';
</style>