const Router=require('koa-router');
const axios=require('axios');
const MemoryFS=require('memory-fs');
const webpack=require('webpack');
const VueServerRenderer=require('vue-server-renderer');

const serverRender=require('./server-render')
const  serverConfig=require('../../build/webpack.config.server');
const serverComplier=webpack(serverConfig);
const  mfs=new MemoryFS();
const path=require('path');
const fs=require('fs');
serverComplier.outputFileSystem=mfs;

let bundle ;
serverComplier.watch({},(err,stats)=>{
    if(err) throw err
      stats = stats.toJson()
      stats.errors.forEach(err =>{
        console.log(err)
      })
     stats.warnings.forEach(warn => {
       console.warn(err)
     })

    const bundlePath=path.join(
      serverConfig.output.path,
      'vue-ssr-server-bundle.json'
    )
    bundle=JSON.parse(mfs.readFileSync(bundlePath,'utf-8'));
    console.log('new bundle genered')
})

const handleSSR=async(ctx)=>{
 // const serverBundle=bundle
  if(!bundle){
     ctx.body='你等一会，憋着急'
     return
  }

  const clientManifestResp=await  axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  )
  const clientManifest=clientManifestResp.data
  const template=fs.readFileSync(
      path.join(__dirname,'../server.template.ejs'),
     'utf-8'
  )

  const renderer=VueServerRenderer.createBundleRenderer(bundle,{
       inject:false,
       clientManifest
  })
   await serverRender(ctx,renderer,template)
}

const router=new Router()

router.get('*',handleSSR)
module.exports=router
