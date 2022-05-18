import React, { Component } from "react"
import ListMakanan from "../ListData/ListMakanan"

class MenuMakanan extends Component {
  render(){
    return(
      <div>
        <h3>Daftar Makanan yang Kami Sediakan : </h3>
        <td>
          <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
        </td>
        <td>
          <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
        </td>
        <td>
          <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
        </td>
        <td>
          <ListMakanan gambar = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
        </td>
        <td>
          <ListMakanan gambar = "https://pict-b.sindonews.net/dyn/732/content/2018/04/10/185/1296770/nasi-kuning-harum-rampa-khas-ambon-bisa-untuk-sarapan-Asi-thumb.jpg"/>
        </td>
      </div>
    )
  }
}

export default MenuMakanan;
