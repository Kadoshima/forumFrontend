import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Typography, Box, IconButton, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        onFileChange(acceptedFiles[0]);
      }
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: { "image/*": [] },
      multiple: false,
    });

  const handleRemoveFile = () => {
    onFileChange(null);
  };

  const file = acceptedFiles[0];

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        ファイル添付
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 150,
          cursor: "pointer",
          backgroundColor: isDragActive ? "action.hover" : "background.paper",
        }}
        {...getRootProps()}>
        <input {...getInputProps()} />
        {file ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <Typography variant="body2" noWrap sx={{ maxWidth: "70%" }}>
              {file.name}
            </Typography>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                handleRemoveFile();
              }}
              size="small">
              <DeleteIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <CloudUploadIcon sx={{ fontSize: 48, mb: 1 }} />
            <Typography>
              {isDragActive
                ? "ファイルをドロップしてください"
                : "クリックまたはドラッグでファイルをアップロード"}
            </Typography>
          </Box>
        )}
      </Paper>
      {file && (
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          ファイルサイズ: {(file.size / 1024 / 1024).toFixed(2)} MB
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;
