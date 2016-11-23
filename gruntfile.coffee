module.exports = (grunt) ->

    # Project configuration.
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')

        # JsHint
        jshint:
            files: ['app.js', 'app/**/*.js', 'config/**/*.js', 'public/**/*.js']
            options:
                globals:
                    console: true
                    module : true

        # develop 啓動伺服器
        develop:
            server:
                file: "app.js"

        # watch 監視檔案並執行task
        watch:
            js:
                files: ["app.js", "app/*.js", "app/**/*.js", "config/*.js"]
                tasks: ['jshint', 'develop' ] # 重新啓動伺服器 & livereload
                options: { nospawn: true }


    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks "grunt-develop"

    # Default task(s).
    grunt.registerTask "default", ['jshint', 'develop', 'watch']
