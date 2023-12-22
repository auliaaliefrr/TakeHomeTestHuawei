<template>
    <div class="container-no-bootstrap">
        <p class="stylinglabel">Nama</p>
        <input type="Text" class="stylinginput" id="nama" placeholder="Nama Lengkap ....">
        <p class="stylinglabel">Email</p>
        <input type="email" class="stylinginput" id="email" placeholder="email@gmail.com">
        <p class="stylinglabel">No Telepon</p>
        <input type="number" class="stylinginput" id="notelepon" placeholder="08XXXXXXXXXX"><br>
        <button type="button" class="buttonnobootstrap" id="submit-data">Submit</button>

        <h5 class="return-value-api">RETURN VALUE API</h5>
        <table style="width: 100%; margin-top: 12px;" id="fetchdata-table">
            <thead>
                <td class="table-class">Nama</td>
                <td class="table-class">Email</td>
                <td class="table-class">No Telepon</td>
            </thead>
            <tbody>
                <!-- <td class="tidak-ada-data" colspan="3">Tidak Ada Data</td> -->
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    mounted() {
        $("#submit-data").on('click', function() {
            let nama = $("#nama").val();
            let email = $("#email").val();
            let notelepon = $("#notelepon").val();

            if (nama !== '' && email !== '' && notelepon !== '' && notelepon.length <= 13 && notelepon.length >= 8) {
                let data = {
                    nama: nama,
                    email: email,
                    notelepon: notelepon,
                };
                fetch('http://localhost:5174/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(responseData => {
                    // console.log(responseData);
                })
                .catch(error => {
                    // console.error(error);
                });
                alert('Data berhasil disimpan')
                location.reload();
            } else {
                let datakosong = [];
                if (nama === '') {
                    datakosong.push('Nama');
                }
                if (email === '') {
                    datakosong.push('Email');
                }
                if (notelepon === '') {
                    datakosong.push('No Telepon');
                }
                if(notelepon.length > 13 || notelepon.length < 8) {
                    datakosong.push('No Telepon Min 8 Max 13');
                }
                alert("Mohon isi " + datakosong.join(', '));
            }
        });
        this.fetchBiodata();
    },
    methods: {
        fetchBiodata() {
            fetch('http://localhost:5174/biodata')
                .then(response => response.json())
                .then(obj => {
                    let data = Object.keys(obj);

                    data.forEach(index => {
                        let dataArray = obj[index];

                        dataArray.forEach(item => {
                            let tbody = $("#fetchdata-table tbody");
                            let tr = $("<tr/>").appendTo(tbody);
                            let tdNama = $("<td/>").html(item.nama).addClass("td-style").appendTo(tr);
                            let tdEmail = $("<td/>").html(item.email).addClass("td-style").appendTo(tr);
                            let tdNoTelepon = $("<td/>").html(item.no).addClass("td-style").appendTo(tr);
                        });
                    });
                })
                .catch(error => {
                    console.error('Error fetching biodata:', error);
                });
        }
    },
}
</script>
<style>
    .return-value-api{
        text-align: center;
        margin-top: 60px;
    }
    .td-style{
        border: 1px solid black;
        padding-left: 8px;
    }
    .tidak-ada-data{
        /*font-weight: bold; */
        text-align: center;   
    }
    .table-class{
        border: 1px solid black;
        background-color: #BABABA;
        color: black;
        font-weight: bold;
        padding-left: 8px;
        height: 36px;
    }
    .buttonnobootstrap{
        border-radius: 4px;
        width: 100px;
        height: 36px;
        margin-top: 8px;
        align-items: center;
        background-color: #198754;
        color: #FFFFFF;
        border: none;
        transition: background-color 0.3s ease;
        margin-bottom: 12px;
    }
    .buttonnobootstrap:hover {
        background-color: #809C13;
    }
    .stylinginput{
        border-radius: 4px;
        border: 1px solid #BABABA;
        height: 36px;
        width: 100%;
    }
    .stylinglabel{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
        margin-top: 4px;
    }
    .container-no-bootstrap{
        width: 100%;
        padding-left: 20%;
        padding-right: 20%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 2%;
    }
    .position{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
    }
    @media only screen and (max-width: 786px) {
        .container-no-bootstrap{
            margin-left: 10%;
            margin-right: 10%;
        }
        .stylinginput{
            border-radius: 4px;
            border: 1px solid #BABABA;
            height: 36px;
            width: 113%;
        }
        .container-no-bootstrap{
            width: 100%;
            padding-right: 20%;
            margin-right: auto;
            margin-left: auto;
            margin-top: 2%;
        }
    }
    /*.btn-submit{
        float: right;
    }
    .title{
        font-weight: bold;
    }
    .position{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
    }
    .container{
        width: 75%;
    }*/
</style>