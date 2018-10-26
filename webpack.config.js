module.exports ={
	entry: './main.js',
	output: {
		path:'/',
		filename: 'index.js',
	},
	devServer:{
		inline:false,
               host:'192.168.224.130',
		port:3001
       },
	module:{
	rules:[
	{
		test: /\.jsx?$/,
		exclude: /(node_modules)/,
		loader: 'babel-loader',
		query: {
			presets:['es2015','react']
		}
	}
]
}
};

