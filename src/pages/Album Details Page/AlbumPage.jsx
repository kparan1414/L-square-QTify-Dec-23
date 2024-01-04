import styles from "./AlbumPage.module.css";
import Detail from "../../Components/Detail/Detail";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { useState } from "react";

export default function AlbumPage({ albumData }) {
  const { title, image, songs, description, follows } = albumData;
  //   Paginaton variables
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  //   Sliced songs arr
  const records = songs.slice(firstIndex, lastIndex);
  //   number of pages
  const nPages = Math.ceil(songs.length / recordsPerPage);
  //   keys array - 1 to n [1,2,3,4,5,...9]
  //   const pages = [...Array(nPages + 1).keys()].slice(1);
  //   Pagination variables

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.wrapper}>
      <Detail
        title={title}
        image={image}
        songs={songs}
        description={description}
        follows={follows}
      />
      <Pagination
        page={currentPage}
        onChange={handlePageChange}
        count={nPages}
        color={"standard"}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="songs table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className={styles.title}>
                    <img className={styles.song} src={row.image} alt="" />
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "21px",
                      }}
                    >
                      {row.title}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{row.artists[0]}</TableCell>
                <TableCell>{`${Math.ceil(
                  row.durationInMs / 60000
                )}:00`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
