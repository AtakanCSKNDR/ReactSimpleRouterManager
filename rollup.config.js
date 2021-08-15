import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"

export default [
    {
        input : 'index.js',
        output: [
            {
                file : 'dist/index.js',
                format : "cjs"
            }
        ],
        plugins : [
            babel({
                exclude: "node_module/**",
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
        ]
    }
]