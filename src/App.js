import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Container>
        <div>
          <Row className="mt-4">
            <Col md={8}>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/picture/listings/1204_00_674_$2y$10$62zBynC3KjUc1MVEmehtPeKpBdnSEE.6ODQ0bGURlbhDqrsGVcR/a_jl.kemuning-dalam-v-jakarta-timur.jpg"
                className="w-100"
              />
            </Col>
            <Col md={4}>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/picture/listings/1204_02_72_$2y$10$gR84rsEjZvW8nlvj3vusAuB/x0ShL.2cOmCq2bdHV4qxlSjdvHVha_jl.kemuning-dalam-v-jakarta-timur.jpg"
                className="w-100 h-100"
              />
            </Col>
          </Row>
        </div>
        <div className="mb-5">
          <Row className="mt-4">
            <Col md={8}>
              <div className="d-flex align-items-center justify-content-between mb-5">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="#">Beranda</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">propeerti-seken</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      1204
                    </li>
                  </ol>
                </nav>
                <div className="d-flex align-items-center">
                  <a className="me-3">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/desktop/share.svg" />
                    <span className="ms-2">Bagikan</span>
                  </a>
                  <a>
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/common/wishlist.png"
                      className="icon"
                    />
                    <span className="ms-2">Simpan</span>
                  </a>
                </div>
              </div>
              <div>
                <p>Rumah</p>
                <h4>Jl. Kemuning Dalam V No. 7 Matraman, Jakarta Timur</h4>
                <p>
                  Jl.Kemuning dalam V RT.13/RW.3, Utan Kayu Utara, Kec.
                  Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                </p>
                <div className="d-flex align-items-center mt-3">
                  <div className="d-flex align-items-center me-3">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/common/listing/bedrooms.svg" />
                    <span className="ms-1">1</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/common/listing/bathrooms.svg" />
                    <span className="ms-1">1</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/common/listing/garages.svg" />
                    <span className="ms-1">1</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/common/listing/building-sizes.svg" />
                    <span className="ms-1">1</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/assets/piintu-portal/common/listing/land_sizes.svg" />
                    <span className="ms-1">1</span>
                  </div>
                </div>
                <div>
                  <h5>Deskripsi</h5>
                  <p>Dijual Rumah Murah Kebangetan di Jakarta Timur</p>
                  <p>
                    Akses masuk gang hanya muat motor, tapi jangan khawatir krna
                    mau kemanapun gampang.{" "}
                  </p>
                  <p>5 Menit ke Halte Transjakarta </p>
                  <p>5 Menit ke Universitas Islam Jakarta Matraman </p>
                  <p>5 Menit RSUD Matraman </p>
                  <p>10 Menit ke Stasiun KRL Pondok Jati </p>
                  <p>15 Menit ke Stasiun besar Manggarai </p>
                  <p>
                    Ngapain punya mobil tapi rumah jauh, mending punya rumah di
                    Jakarta dekat kemana2 dan menggunakan transportasi umum,
                    lebih hemat, duitnya bisa ditabung buat masa depan
                  </p>
                  <p>Harga masih Nego, siapa cepat dapat. </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="card">
                <div class="card-body">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="profile me-3">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/public.piintu.com/picture/users/profile/profile_303_1627440765_gege.jpg" />
                      </div>
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <p>mayache</p>
                          <p>Agent Partner</p>
                        </div>
                        <hr className="my-1" />
                        <p>Piintu</p>
                      </div>
                    </div>
                    <div className="text-center mb-3">
                      <h4 className="text-danger">Rp. 495.000.000</h4>
                      <hr className="my-1" />
                      <p>Ingin lihat lebih detail properti ini?</p>
                    </div>
                    <form>
                      <div className="mb-2">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Pilih Tanggal"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Pilih Waktu"
                        />
                      </div>
                      <button className="btn btn-secondary w-100 mt-4">
                        Jadwalkan Survey
                      </button>
                      <p className="my-2 text-center">atau</p>
                      <button className="btn btn-success w-100">
                        Chat Whatsapp
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="mb-5">
          <h4 className="mb-3">Detail Informasi</h4>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Tipe Properti</h6>
                    <p>Rumah</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Tipe Iklan</h6>
                    <p>Dijual</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Sertifikat</h6>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Hadap</h6>
                    <p>Timur</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Kamar Tidur</h6>
                    <p>1</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Kamar Mandi</h6>
                    <p>1</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Daya Listrik</h6>
                    <p>2200 watt</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Luas Tanah</h6>
                    <p>54 m2</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Jumlah Lantai</h6>
                    <p>2</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="list">
                    <h6>Luas Bangunan</h6>
                    <p>108 m2</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div>
          <Row className="mb-4">
            <Col md={8}>
              <h4 class="mb-3">Analisa Kelayakan Kredit Anda</h4>
              <Row className="mb-4">
                <Col md={6}>
                  <p>Plafon KPR/KPA</p>
                  <div>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <p>Plafon KPR/KPA</p>
                  <Row>
                    <Col md={5}>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </Col>
                    <Col md={7}>
                      <div>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <h5 className="mb-1">Suku Bunga (%)</h5>
                    <input
                      type="range"
                      class="form-range"
                      id="customRange1"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-1">Tenor (Tahun)</h5>
                    <input
                      type="range"
                      class="form-range"
                      id="customRange1"
                    ></input>
                  </div>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Total Penghasilan (per bulan)
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail2" class="form-label">
                        Total Kewajiban Hutang Saat ini (per bulan)
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail3" class="form-label">
                        Sisa Kuota Hutang (per bulan)
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail3"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </form>
                </Col>
                <Col md={6}>
                  <div class="card text-center">
                    <div class="card-body">
                      <h4 className="mb-5">Hasil Analisis Kredit Anda</h4>
                      <div className="mb-3">
                        <p className="mb-2">Cicilan / Bulan</p>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Rp"
                        />
                      </div>
                      <div>
                        <p className="mb-2">
                          Ratio Hutang pada Penghasilan: 0 %
                        </p>
                        <input
                          type="range"
                          class="form-range"
                          id="customRange1"
                        ></input>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
